import { Module } from '@nestjs/common'
import { PersonasModule } from './modules/personas/personas.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Persona } from './modules/personas/entities/persona.entity'
import { ConfigModule } from '@nestjs/config'
import { GastosFijosModule } from './modules/gastos_fijos/gastos_fijos.module'
import { GastosFijo } from './modules/gastos_fijos/entities/gastos_fijo.entity'
import { DeudasModule } from './modules/deudas/deudas.module'
import { Deuda } from './modules/deudas/entities/deuda.entity'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DB_CONNECTION,
      entities: [Persona, GastosFijo, Deuda],
      synchronize: true,
      ssl: true,
    }),
    PersonasModule,
    GastosFijosModule,
    DeudasModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
