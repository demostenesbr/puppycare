import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsInt, IsISO8601, IsOptional, IsString, ValidateNested } from 'class-validator';

export class PacoteSyncItemDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  PUBLIC_ID?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  ID_CLIENTE?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  ID_SERVICO?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  QTD_BANHOS?: number;

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

export class PacoteSyncBatchRequestDto {
  @ApiProperty({ type: [PacoteSyncItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PacoteSyncItemDto)
  items!: PacoteSyncItemDto[];
}
