import {
  IsInt,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAtendimentoImagemDto {
  @ApiProperty({ description: 'ID do atendimento' })
  @IsInt()
  ID_ATENDIMENTO: number;

  @ApiProperty({ description: 'Caminho da imagem', example: '/uploads/img123.jpg' })
  @IsString()
  CAMINHO_IMAGEM: string;
}
