import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hero } from 'src/entities/hero';

@Injectable()
export class HeroService {

    constructor(
         @InjectRepository(Hero)
         private heroRepository: Repository<Hero>,
    ){}

    getAll(): Promise<Hero[]> {
        return this.heroRepository.find();
    }

    getById(id: number): Promise <Hero | null>{
            return this.heroRepository.findOne({where: {id: id}})
        }
    
        async create(newHero: Hero): Promise<Hero | null>{
            const addedHero = this.heroRepository.create(newHero);
            await this.heroRepository.save(addedHero);
            return addedHero;
          }
    
        async update(id:number, updateHero: Hero): Promise<Hero|null>{ 
          await this.heroRepository.update(id, updateHero);
          return this.heroRepository.findOne({where: {id: id} });
      }
    
      async delete(id:number){
        this.heroRepository.delete(id);
      }
  }

