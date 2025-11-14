import { PartialType } from '@nestjs/swagger';
import { CreatePacoteDto } from './create-pacote.dto';

export class UpdatePacoteDto extends PartialType(CreatePacoteDto) {}
