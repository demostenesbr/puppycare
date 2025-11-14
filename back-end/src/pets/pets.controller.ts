import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PetSyncBatchRequestDto } from './dto/pet-sync.dto';

@ApiTags('pets')
@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo pet' })
  @ApiResponse({ status: 201, description: 'Pet criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createPetDto: CreatePetDto) {
    return this.petsService.create(createPetDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os pets' })
  @ApiResponse({
    status: 200,
    description: 'Lista de pets retornada com sucesso.',
  })
  findAll() {
    return this.petsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um pet por ID' })
  @ApiParam({ name: 'id', description: 'ID do pet' })
  @ApiResponse({ status: 200, description: 'Pet encontrado.' })
  @ApiResponse({ status: 404, description: 'Pet não encontrado.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.petsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um pet' })
  @ApiParam({ name: 'id', description: 'ID do pet' })
  @ApiResponse({ status: 200, description: 'Pet atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Pet não encontrado.' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updatePetDto: UpdatePetDto) {
    return this.petsService.update(id, updatePetDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um pet' })
  @ApiParam({ name: 'id', description: 'ID do pet' })
  @ApiResponse({ status: 200, description: 'Pet removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Pet não encontrado.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.petsService.remove(id);
  }

  // --- Offline-first sync endpoints ---
  @Get('changes')
  @ApiOperation({ summary: 'Listar alterações de pets desde um timestamp' })
  @ApiResponse({ status: 200, description: 'Mudanças retornadas com sucesso.' })
  getChanges(@Query('since') since?: string) {
    return this.petsService.getChanges(since);
  }

  @Post('batch')
  @ApiOperation({ summary: 'Aplicar lote de alterações de pets (upsert por PUBLIC_ID)' })
  @ApiResponse({ status: 200, description: 'Resultados do processamento do lote.' })
  batch(@Body() body: PetSyncBatchRequestDto) {
    return this.petsService.batchUpsert(body);
  }

  @Delete('public/:publicId')
  @ApiOperation({ summary: 'Soft delete por PUBLIC_ID (marca DELETED_AT)' })
  @ApiParam({ name: 'publicId', description: 'PUBLIC_ID do pet' })
  softDeleteByPublicId(@Param('publicId') publicId: string) {
    return this.petsService.softDeleteByPublicId(publicId);
  }
}
