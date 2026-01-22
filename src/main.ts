import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Activer le parsing JSON
  app.use((req, res, next) => {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
    });
    req.on('end', () => {
      if (data) {
        try {
          req.body = JSON.parse(data);
        } catch (e) {
          req.body = {};
        }
      }
      next();
    });
  });
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
