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
  }

