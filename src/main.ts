import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { WsAdapter } from './dash/ws.adapter';
// import { WsAdapter } from '@nestjs/platform-ws';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  // app.enableCors({
  //   origin: '*',

  //   credentials: true,

  //   // "allowedHeaders":['Authorization','content-type'],

  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',

  //   preflightContinue: false,

  //   optionsSuccessStatus: 204,
  // });
  // app.useWebSocketAdapter(new WsAdapter(app)); // 使用我们的适配器
  await app.listen(3000);
}
bootstrap();
