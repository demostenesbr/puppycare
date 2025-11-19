import { Controller, Post, Body, Get, Param, Query, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { UsuariosService } from './usuarios.service';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { LoginDto } from './dto/create-usuario.dto';

// Local DTO used for batch sync requests to avoid missing module import.
// Adjust the shape below to match the real payload expected by the service.
interface UsuarioSyncBatchRequestDto {
  items: any[];
  source?: string;
  timestamp?: string;
}

@ApiTags('usuarios')
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post('login')
  @ApiOperation({ summary: 'Autenticar usuário e retornar JWT por EMAIL' })
  @ApiResponse({ status: 200, description: 'Login realizado com sucesso.' })
  @ApiResponse({ status: 401, description: 'Credenciais inválidas.' })
  async login(@Body() body: LoginDto) {
    return this.usuariosService.login(body.email, body.senha);
  }

@Get()
@ApiOperation({ summary: 'Listar todos os usuários' })
@ApiResponse({
  status: 200,
  description: 'Lista de usuários retornada com sucesso.',
})
findAll() {
  return this.usuariosService.findAll();
}

  // --- Offline-first sync endpoints ---
  @Get('changes')
  @ApiOperation({ summary: 'Listar alterações de usuários desde um timestamp' })
  @ApiResponse({ status: 200, description: 'Mudanças retornadas com sucesso.' })
  getChanges(@Query('since') since?: string) {
    return this.usuariosService.getChanges(since);
  }

  @Post('batch')
  @ApiOperation({ summary: 'Aplicar lote de alterações de usuários (upsert por PUBLIC_ID)' })
  @ApiResponse({ status: 200, description: 'Resultados do processamento do lote.' })
  batch(@Body() body: UsuarioSyncBatchRequestDto) {
    return this.usuariosService.batchUpsert(body);
  }



  @Delete('public/:publicId')
  @ApiOperation({ summary: 'Soft delete por PUBLIC_ID (marca DELETED_AT)' })
  @ApiParam({ name: 'publicId', description: 'PUBLIC_ID do usuário' })
  softDeleteByPublicId(@Param('publicId') publicId: string) {
    return this.usuariosService.softDeleteByPublicId(publicId);
  }
}

