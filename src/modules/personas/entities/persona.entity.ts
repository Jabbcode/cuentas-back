import { Deuda } from 'src/modules/deudas/entities/deuda.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Persona {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 120 })
  name: string

  @OneToMany(() => Deuda, (deuda) => deuda.persona)
  deudas: Deuda[]
}
