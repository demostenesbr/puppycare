import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsInt, IsISO8601, IsOptional, IsString, ValidateNested } from 'class-validator';

export class ClienteSyncItemDto {
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
  TELEFONE?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  ENDERECO?: string;

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

export class ClienteSyncBatchRequestDto {
  @ApiProperty({ type: [ClienteSyncItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClienteSyncItemDto)
  items!: ClienteSyncItemDto[];
}
