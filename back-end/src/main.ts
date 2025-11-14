import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  // Habilitar validação global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Configurar Swagger/OpenAPI
  const config = new DocumentBuilder()
    .setTitle('PuppyCare API')
    .setDescription(
      'API para gerenciamento de serviços de banho e tosa para pets',
    )
    .setVersion('1.0')
    .addTag('clientes', 'Gerenciamento de clientes')
    .addTag('pets', 'Gerenciamento de pets')
    .addTag('pacotes', 'Gerenciamento de assinaturas (pacotes)')
    .addTag('servicos', 'Gerenciamento de serviços oferecidos')
    .addTag('usuarios', 'Gerenciamento de usuários do sistema')
    .addTag('atendimentos', 'Gerenciamento de atendimentos')
    .addTag('atendimento-imagens', 'Gerenciamento de imagens de atendimentos')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 4000);
  console.log('[X] - Backend rodando na porta 4000...');
  console.log(
    '[📚] - Documentação Swagger disponível em: http://localhost:4000/api',
  );
}
void bootstrap();
