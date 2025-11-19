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

  @ApiPropertyOptional({ description: 'Descrição/cargo do usuário' })
  @IsOptional()
  @IsString()
  DESCRICAO?: string;

  @ApiProperty({ description: 'Senha (hash)', example: 'hash_bcrypt_aqui' })
  @IsString()
  @MinLength(6)
  SENHA_HASH: string;
}
