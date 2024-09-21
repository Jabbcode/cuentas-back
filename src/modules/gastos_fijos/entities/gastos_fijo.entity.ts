import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class GastosFijo {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  razon: string

  @Column()
  monto: number

  @Column({ nullable: true })
  fecha: Date

  @Column()
  tipo: 'Gasto' | 'Ingreso'
}
