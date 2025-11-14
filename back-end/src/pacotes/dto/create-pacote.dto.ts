import { IsInt, IsOptional, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePacoteDto {
  @ApiProperty({ description: 'ID_CLIENTE do assinante (inteiro)' })
  @IsInt()
  ID_CLIENTE: number;

  @ApiProperty({ description: 'ID_SERVICO contratado (inteiro)' })
  @IsInt()
  ID_SERVICO: number;

  @ApiPropertyOptional({ description: 'Quantidade de banhos disponíveis/consumidos', default: 0 })
  @IsOptional()
  @IsInt()
  @Min(0)
  QTD_BANHOS?: number;
}
