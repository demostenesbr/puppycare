import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsInt, IsISO8601, IsOptional, IsString, ValidateNested } from 'class-validator';

export class UsuarioSyncItemDto {
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
  EMAIL?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  DESCRICAO?: string | null;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  SENHA_HASH?: string;

  @ApiProperty({ required: false, description: 'Carimbo de data/hora ISO da atualização' })
  @IsOptional()
  @IsISO8601()
  UPDATED_AT?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  VERSION?: number;

  @ApiProperty({ required: false, description: 'Carimbo de data/hora ISO para exclusão lógica ou null' })
  @IsOptional()
  @IsISO8601()
  DELETED_AT?: string | null;
}

export class UsuarioSyncBatchRequestDto {
  @ApiProperty({ type: [UsuarioSyncItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsuarioSyncItemDto)
  items!: UsuarioSyncItemDto[];
}
