import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { HeroService } from './hero.service';
import { Hero } from 'src/entities/hero';


@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Get()
  getAll(): Promise<Hero[]>  {
    return this.heroService.getAll();
  }

    @Get(':id')
    getById(@Param('id') id): Promise<Hero|null>  {
      return this.heroService.getById(id);
    }
  
    @Post()
    create(@Body() HeroRequest:Hero):Promise<Hero|null>{
      return this.heroService.create(HeroRequest);
    }
  
    @Put(':id')
    update(@Param('id') id, @Body() HeroUpdate:Hero):Promise<Hero|null>{
      return this.heroService.update(id, HeroUpdate);
    }
  
  
    @Delete(':id')
    delete(@Param('id') id){
      this.heroService.delete(id)
    }
}
