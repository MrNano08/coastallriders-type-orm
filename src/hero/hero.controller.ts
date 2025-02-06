import { Controller, Get } from '@nestjs/common';
import { HeroService } from './hero.service';
import { Hero } from 'src/entities/hero';


@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Get()
  getAll(): Promise<Hero[]>  {
    return this.heroService.getAll();
  }
}
