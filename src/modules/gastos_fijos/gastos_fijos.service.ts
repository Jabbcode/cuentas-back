import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateGastosFijoDto } from './dto/create-gastos_fijo.dto'
import { UpdateGastosFijoDto } from './dto/update-gastos_fijo.dto'
import { GastosFijo } from './entities/gastos_fijo.entity'

@Injectable()
export class GastosFijosService {
  constructor(
    @InjectRepository(GastosFijo)
    private readonly gastosFijoRepository: Repository<GastosFijo>,
  ) {}

  async create(createGastosFijoDto: CreateGastosFijoDto): Promise<GastosFijo> {
    return await this.gastosFijoRepository.save(createGastosFijoDto)
  }

  async findAll(): Promise<GastosFijo[]> {
    return await this.gastosFijoRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} gastosFijo`
  }

  update(id: number, updateGastosFijoDto: UpdateGastosFijoDto) {
    return `This action updates a #${id} gastosFijo`
  }

  async remove(id: number): Promise<string> {
    await this.gastosFijoRepository.delete(id)

    return 'Gasto eliminado correctamente'
  }
}
