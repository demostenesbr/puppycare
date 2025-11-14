import {
  IsInt,
  IsNumber,
  IsString,
  IsOptional,
  Min,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAtendimentoDto {
  @ApiProperty({ description: 'ID do cliente' })
  @IsInt()
  ID_CLIENTE: number;

  @ApiProperty({ description: 'ID do pet' })
  @IsInt()
  ID_PET: number;

  @ApiProperty({ description: 'ID do serviço' })
  @IsInt()
  ID_SERVICO: number;

  @ApiProperty({ description: 'Valor cobrado', example: 79.90 })
  @IsNumber()
  @Min(0)
  VALOR_COBRADO: number;

  @ApiProperty({ description: 'Tipo de atendimento', example: 'banho' })
  @IsString()
  TIPO: string;

  @ApiPropertyOptional({ description: 'Notas sobre o atendimento' })
  @IsOptional()
  @IsString()
  NOTAS?: string;
}
