import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, MinLength } from 'class-validator';

export class LoginDto {
  /**
   * Campo email: string
   * Associado ao campo EMAIL do modelo USUARIOS
   */
  @ApiProperty({ example: 'admin@puppycarepet.com.br', description: 'E-mail do usuário. Corresponde ao campo EMAIL no banco.' })
  @IsString()
  email: string;

  /**
   * Campo senha: string
   * Associado ao campo SENHA_HASH do modelo USUARIOS (será hasheada no backend)
   */
  @ApiProperty({ example: 'admin123', description: 'Senha do usuário. Corresponde ao campo SENHA_HASH (após hash) no banco.' })
  @IsString()
  senha: string;
}

export class CreateUsuarioDto {
  @ApiProperty({ description: 'Nome do usuário', example: 'User' })
  @IsString()
  NOME: string;

  @ApiProperty({
    description: 'E-mail do usuário',
    example: 'user@puppycarepet.com.br',
  })
  @IsString()
  EMAIL: string;

  @ApiPropertyOptional({ description: 'Descrição/cargo do usuário' })
  @IsOptional()
  @IsString()
  DESCRICAO?: string;

  @ApiProperty({
    description: 'Senha (texto puro, será hasheada)',
    example: 'minhasenha123',
  })
  @IsString()
  @MinLength(6)
  SENHA: string;
}
