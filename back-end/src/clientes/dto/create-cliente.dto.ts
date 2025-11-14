import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClienteDto {
  @ApiProperty({ description: 'NOME do cliente' })
  @IsString()
  NOME: string;

  @ApiProperty({ description: 'TELEFONE do cliente' })
  @IsString()
  TELEFONE: string;

  @ApiProperty({ description: 'ENDERECO completo do cliente' })
  @IsString()
  ENDERECO: string;
}
