import {
  IsString,
  IsOptional,
  IsNumber,
  Min,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateServicoDto {
  @ApiProperty({ description: 'Nome do serviço', example: 'Banho e Tosa' })
  @IsString()
  NOME: string;

  @ApiPropertyOptional({ description: 'Descrição do serviço' })
  @IsOptional()
  @IsString()
  DESCRICAO?: string;

  @ApiProperty({ description: 'Valor do serviço', example: 79.90 })
  @IsNumber()
  @Min(0)
  VALOR: number;
}
