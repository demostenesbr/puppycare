import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ClientesModule } from './clientes/clientes.module';
import { PetsModule } from './pets/pets.module';
import { PacotesModule } from './pacotes/pacotes.module';
import { AtendimentosModule } from './atendimentos/atendimentos.module';
import { ServicosModule } from './servicos/servicos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AtendimentoImagensModule } from './atendimento-imagens/atendimento-imagens.module';

@Module({
  imports: [PrismaModule, ClientesModule, PetsModule, PacotesModule, AtendimentosModule, ServicosModule, UsuariosModule, AtendimentoImagensModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
