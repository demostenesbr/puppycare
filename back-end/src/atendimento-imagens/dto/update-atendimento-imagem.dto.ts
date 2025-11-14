import { PartialType } from '@nestjs/swagger';
import { CreateAtendimentoImagemDto } from './create-atendimento-imagem.dto';

export class UpdateAtendimentoImagemDto extends PartialType(CreateAtendimentoImagemDto) {}
