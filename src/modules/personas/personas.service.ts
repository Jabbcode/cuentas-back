import { HttpException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreatePersonaDto } from './dto/create-persona.dto'
import { UpdatePersonaDto } from './dto/update-persona.dto'
import { Persona } from './entities/persona.entity'

@Injectable()
export class PersonasService {
  constructor(
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
  ) {}

  async create(createPersonaDto: CreatePersonaDto): Promise<Persona> {
    return await this.personaRepository.save(createPersonaDto)
  }

  async findAll(): Promise<Persona[]> {
    return await this.personaRepository.find({
      relations: ['deudas'],
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} persona`
  }

  update(id: number, updatePersonaDto: UpdatePersonaDto) {
    return `This action updates a #${id} persona`
  }

  async remove(id: number): Promise<string> {
    try {
      const ingredient = await this.personaRepository.findBy({ id })

      if (!ingredient) {
        throw new HttpException(
          {
            statusCode: 400,
            message: `No existe persona con el id ${id}`,
          },
          400,
        )
      }

      await this.personaRepository.delete(id)

      return 'La persona se elimino correctamente'
    } catch (error) {
      if (error instanceof HttpException) {
        throw error
      } else {
        throw new HttpException(
          {
            statusCode: 500,
            message: 'Internal server error',
          },
          500,
        )
      }
    }
  }
}
