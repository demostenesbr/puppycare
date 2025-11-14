import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { PacotesService } from './pacotes.service';
import { CreatePacoteDto } from './dto/create-pacote.dto';
import { UpdatePacoteDto } from './dto/update-pacote.dto';
import { PacoteSyncBatchRequestDto } from './dto/pacote-sync.dto';

@ApiTags('pacotes')
@Controller('pacotes')
export class PacotesController {
    constructor(private readonly pacotesService: PacotesService) {}

    @Post()
    @ApiOperation({ summary: 'Criar um novo pacote' })
    @ApiResponse({ status: 201, description: 'Pacote criado com sucesso.' })
    @ApiResponse({ status: 400, description: 'Dados inválidos.' })
    create(@Body() createPacoteDto: CreatePacoteDto) {
        return this.pacotesService.create(createPacoteDto);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todos os pacotes' })
    @ApiResponse({
        status: 200,
        description: 'Lista de pacotes retornada com sucesso.',
    })
    findAll() {
        return this.pacotesService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Buscar um pacote por ID' })
    @ApiParam({ name: 'id', description: 'ID do pacote' })
    @ApiResponse({ status: 200, description: 'Pacote encontrado.' })
    @ApiResponse({ status: 404, description: 'Pacote não encontrado.' })
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.pacotesService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Atualizar um pacote' })
    @ApiParam({ name: 'id', description: 'ID do pacote' })
    @ApiResponse({ status: 200, description: 'Pacote atualizado com sucesso.' })
    @ApiResponse({ status: 404, description: 'Pacote não encontrado.' })
    update(@Param('id', ParseIntPipe) id: number, @Body() updatePacoteDto: UpdatePacoteDto) {
        return this.pacotesService.update(id, updatePacoteDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Remover um pacote' })
    @ApiParam({ name: 'id', description: 'ID do pacote' })
    @ApiResponse({ status: 200, description: 'Pacote removido com sucesso.' })
    @ApiResponse({ status: 404, description: 'Pacote não encontrado.' })
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.pacotesService.remove(id);
    }

    // --- Offline-first sync endpoints ---
    @Get('changes')
    @ApiOperation({ summary: 'Listar alterações de pacotes desde um timestamp' })
    @ApiResponse({ status: 200, description: 'Mudanças retornadas com sucesso.' })
    getChanges(@Query('since') since?: string) {
        return this.pacotesService.getChanges(since);
    }

    @Post('batch')
    @ApiOperation({ summary: 'Aplicar lote de alterações de pacotes (upsert por PUBLIC_ID)' })
    @ApiResponse({ status: 200, description: 'Resultados do processamento do lote.' })
    batch(@Body() body: PacoteSyncBatchRequestDto) {
        return this.pacotesService.batchUpsert(body);
    }

    @Delete('public/:publicId')
    @ApiOperation({ summary: 'Soft delete por PUBLIC_ID (marca DELETED_AT)' })
    @ApiParam({ name: 'publicId', description: 'PUBLIC_ID do pacote' })
    softDeleteByPublicId(@Param('publicId') publicId: string) {
        return this.pacotesService.softDeleteByPublicId(publicId);
    }
}
