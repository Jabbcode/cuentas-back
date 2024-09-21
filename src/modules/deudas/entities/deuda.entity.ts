import { Persona } from 'src/modules/personas/entities/persona.entity'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Deuda {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  razon: string

  @Column()
  monto: number

  @Column({ nullable: true })
  fecha: Date

  @Column()
  estado: 'Pagado' | 'No Pagado'

  @ManyToOne(() => Persona, (persona) => persona.id)
  persona: Persona
}
