import { IsString, IsOptional, IsInt, IsDateString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePetDto {
  @ApiProperty({ description: 'ID_CLIENTE (inteiro) proprietário do pet' })
  @IsInt()
  ID_CLIENTE: number;

  @ApiProperty({ description: 'NOME do pet' })
  @IsString()
  NOME: string;

  @ApiPropertyOptional({ description: 'RACA do pet' })
  @IsOptional()
  @IsString()
  RACA?: string;

  @ApiPropertyOptional({ description: 'DATA_NASC do pet (ISO string)' })
  @IsOptional()
  @IsDateString()
  DATA_NASC?: string;
}
