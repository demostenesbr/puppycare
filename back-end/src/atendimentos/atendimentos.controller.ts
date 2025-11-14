import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { AtendimentosService } from './atendimentos.service';
import { CreateAtendimentoDto } from './dto/create-atendimento.dto';
import { UpdateAtendimentoDto } from './dto/update-atendimento.dto';
import { AtendimentoSyncBatchRequestDto } from './dto/atendimento-sync.dto';

@ApiTags('atendimentos')
@Controller('atendimentos')
export class AtendimentosController {
  constructor(private readonly atendimentosService: AtendimentosService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo atendimento' })
  @ApiResponse({ status: 201, description: 'Atendimento criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createAtendimentoDto: CreateAtendimentoDto) {
    return this.atendimentosService.create(createAtendimentoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os atendimentos' })
  @ApiResponse({
    status: 200,
    description: 'Lista de atendimentos retornada com sucesso.',
  })
  findAll() {
    return this.atendimentosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um atendimento por ID' })
  @ApiParam({ name: 'id', description: 'ID do atendimento' })
  @ApiResponse({ status: 200, description: 'Atendimento encontrado.' })
  @ApiResponse({ status: 404, description: 'Atendimento não encontrado.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.atendimentosService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um atendimento' })
  @ApiParam({ name: 'id', description: 'ID do atendimento' })
  @ApiResponse({
    status: 200,
    description: 'Atendimento atualizado com sucesso.',
  })
  @ApiResponse({ status: 404, description: 'Atendimento não encontrado.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAtendimentoDto: UpdateAtendimentoDto,
  ) {
    return this.atendimentosService.update(id, updateAtendimentoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um atendimento' })
  @ApiParam({ name: 'id', description: 'ID do atendimento' })
  @ApiResponse({ status: 200, description: 'Atendimento removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Atendimento não encontrado.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.atendimentosService.remove(id);
  }

  // --- Offline-first sync endpoints ---
  @Get('changes')
  @ApiOperation({ summary: 'Listar alterações de atendimentos desde um timestamp' })
  @ApiResponse({ status: 200, description: 'Mudanças retornadas com sucesso.' })
  getChanges(@Query('since') since?: string) {
    return this.atendimentosService.getChanges(since);
  }

  @Post('batch')
  @ApiOperation({ summary: 'Aplicar lote de alterações de atendimentos (upsert por PUBLIC_ID)' })
  @ApiResponse({ status: 200, description: 'Resultados do processamento do lote.' })
  batch(@Body() body: AtendimentoSyncBatchRequestDto) {
    return this.atendimentosService.batchUpsert(body);
  }

  @Delete('public/:publicId')
  @ApiOperation({ summary: 'Soft delete por PUBLIC_ID (marca DELETED_AT)' })
  @ApiParam({ name: 'publicId', description: 'PUBLIC_ID do atendimento' })
  softDeleteByPublicId(@Param('publicId') publicId: string) {
    return this.atendimentosService.softDeleteByPublicId(publicId);
  }
}
