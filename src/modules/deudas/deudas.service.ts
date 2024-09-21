import { Injectable } from '@nestjs/common'
import { CreateDeudaDto } from './dto/create-deuda.dto'
import { UpdateDeudaDto } from './dto/update-deuda.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Deuda } from './entities/deuda.entity'
import { Repository } from 'typeorm'

@Injectable()
export class DeudasService {
  constructor(
    @InjectRepository(Deuda)
    private readonly deudaRepository: Repository<Deuda>,
  ) {}

  async create(createDeudaDto: CreateDeudaDto): Promise<Deuda> {
    return this.deudaRepository.save(createDeudaDto)
  }

  async findAll(): Promise<Deuda[]> {
    return await this.deudaRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} deuda`
  }

  update(id: number, updateDeudaDto: UpdateDeudaDto) {
    return `This action updates a #${id} deuda`
  }

  async remove(id: number): Promise<string> {
    await this.deudaRepository.delete(id)

    return 'Deuda eliminada correctemente'
  }
}
