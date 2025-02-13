import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Who } from 'src/entities/who';

@Injectable()
export class WhoService {

    constructor(
         @InjectRepository(Who)
         private WhoRepository: Repository<Who>,
    ){}

    getAll(): Promise<Who[]> {
        return this.WhoRepository.find();
    }

    getById(id: number): Promise <Who | null>{
            return this.WhoRepository.findOne({where: {id: id}})
        }
    
        async create(newWho: Who): Promise<Who | null>{
            const addedWho = this.WhoRepository.create(newWho);
            await this.WhoRepository.save(addedWho);
            return addedWho;
          }
    
        async update(id:number, updateWho: Who): Promise<Who|null>{ 
          await this.WhoRepository.update(id, updateWho);
          return this.WhoRepository.findOne({where: {id: id} });
      }
    
      async delete(id:number){
        this.WhoRepository.delete(id);
      }
  }

