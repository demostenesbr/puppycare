import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { ClienteSyncBatchRequestDto } from './dto/cliente-sync.dto';

@ApiTags('clientes')
@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo cliente' })
  @ApiResponse({ status: 201, description: 'Cliente criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clientesService.create(createClienteDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os clientes' })
  @ApiResponse({
    status: 200,
    description: 'Lista de clientes retornada com sucesso.',
  })
  findAll() {
    return this.clientesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um cliente por ID' })
  @ApiParam({ name: 'id', description: 'ID do cliente' })
  @ApiResponse({ status: 200, description: 'Cliente encontrado.' })
  @ApiResponse({ status: 404, description: 'Cliente não encontrado.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.clientesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um cliente' })
  @ApiParam({ name: 'id', description: 'ID do cliente' })
  @ApiResponse({ status: 200, description: 'Cliente atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Cliente não encontrado.' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clientesService.update(id, updateClienteDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um cliente' })
  @ApiParam({ name: 'id', description: 'ID do cliente' })
  @ApiResponse({ status: 200, description: 'Cliente removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Cliente não encontrado.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.clientesService.remove(id);
  }

  // --- Offline-first sync endpoints ---
  @Get('changes')
  @ApiOperation({ summary: 'Listar alterações de clientes desde um timestamp' })
  @ApiResponse({ status: 200, description: 'Mudanças retornadas com sucesso.' })
  getChanges(@Query('since') since?: string) {
    return this.clientesService.getChanges(since);
  }

  @Post('batch')
  @ApiOperation({ summary: 'Aplicar lote de alterações de clientes (upsert por PUBLIC_ID)' })
  @ApiResponse({ status: 200, description: 'Resultados do processamento do lote.' })
  batch(@Body() body: ClienteSyncBatchRequestDto) {
    return this.clientesService.batchUpsert(body);
  }

  @Delete('public/:publicId')
  @ApiOperation({ summary: 'Soft delete por PUBLIC_ID (marca DELETED_AT)' })
  @ApiParam({ name: 'publicId', description: 'PUBLIC_ID do cliente' })
  softDeleteByPublicId(@Param('publicId') publicId: string) {
    return this.clientesService.softDeleteByPublicId(publicId);
  }
}
