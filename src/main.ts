import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const cortsOptions: CorsOptions = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 200,
  }

  app.enableCors(cortsOptions)

  app.setGlobalPrefix('api/v1')
  await app.listen(3000)
}
bootstrap()
