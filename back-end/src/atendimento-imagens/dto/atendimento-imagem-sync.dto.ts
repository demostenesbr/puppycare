import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsInt, IsISO8601, IsOptional, IsString, ValidateNested } from 'class-validator';

export class AtendimentoImagemSyncItemDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  PUBLIC_ID?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  ID_ATENDIMENTO?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  CAMINHO_IMAGEM?: string;

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

export class AtendimentoImagemSyncBatchRequestDto {
  @ApiProperty({ type: [AtendimentoImagemSyncItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AtendimentoImagemSyncItemDto)
  items!: AtendimentoImagemSyncItemDto[];
}
