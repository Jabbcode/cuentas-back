import { Module } from '@nestjs/common'
import { GastosFijosService } from './gastos_fijos.service'
import { GastosFijosController } from './gastos_fijos.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GastosFijo } from './entities/gastos_fijo.entity'

@Module({
  imports: [TypeOrmModule.forFeature([GastosFijo])],
  controllers: [GastosFijosController],
  providers: [GastosFijosService],
})
export class GastosFijosModule {}
