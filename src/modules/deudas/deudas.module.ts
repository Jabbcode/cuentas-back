import { Module } from '@nestjs/common'
import { DeudasService } from './deudas.service'
import { DeudasController } from './deudas.controller'
import { Deuda } from './entities/deuda.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([Deuda])],
  controllers: [DeudasController],
  providers: [DeudasService],
})
export class DeudasModule {}
