import { Module } from '@nestjs/common';
import { AtendimentoImagensController } from './atendimento-imagens.controller';
import { AtendimentoImagensService } from './atendimento-imagens.service';

@Module({
  controllers: [AtendimentoImagensController],
  providers: [AtendimentoImagensService]
})
export class AtendimentoImagensModule {}
