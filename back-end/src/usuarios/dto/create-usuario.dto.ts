import {
  IsString,
  IsOptional,
  MinLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUsuarioDto {
  @ApiProperty({ description: 'Nome do usuário', example: 'Admin' })
  @IsString()
  NOME: string;

  @ApiProperty({ description: 'E-mail do usuário', example: 'admin@exemplo.com' })
  @IsString()
  EMAIL: string;

  @ApiPropertyOptional({ description: 'Descrição/cargo do usuário' })
  @IsOptional()
  @IsString()
  DESCRICAO?: string;

  @ApiProperty({ description: 'Senha (texto puro, será hasheada)', example: 'minhasenha123' })
  @IsString()
  @MinLength(6)
  SENHA: string;
}
