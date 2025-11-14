import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsInt, IsISO8601, IsOptional, IsString, IsNumber, ValidateNested } from 'class-validator';

export class ServicoSyncItemDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  PUBLIC_ID?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  NOME?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  DESCRICAO?: string | null;

  @ApiProperty({ required: false, description: 'Valor como string para Decimal' })
  @IsOptional()
  VALOR?: string | number;

  @ApiProperty({ required: false, description: 'ISO timestamp of the update' })
  @IsOptional()
  @IsISO8601()
  UPDATED_AT?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  VERSION?: number;

  @ApiProperty({ required: false, description: 'ISO timestamp for soft delete or null' })
  @IsOptional()
  @IsISO8601()
  DELETED_AT?: string | null;
}

export class ServicoSyncBatchRequestDto {
  @ApiProperty({ type: [ServicoSyncItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ServicoSyncItemDto)
  items!: ServicoSyncItemDto[];
}
