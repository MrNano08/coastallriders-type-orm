import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { WhoService } from './who.service';
import { Who } from 'src/entities/who';


@Controller('who')
export class WhoController {
  constructor(private readonly WhoService: WhoService) {}

  @Get()
  getAll(): Promise<Who[]>  {
    return this.WhoService.getAll();
  }

    @Get(':id')
    getById(@Param('id') id): Promise<Who|null>  {
      return this.WhoService.getById(id);
    }
  
    @Post()
    create(@Body() WhoRequest:Who):Promise<Who|null>{
      return this.WhoService.create(WhoRequest);
    }
  
    @Put(':id')
    update(@Param('id') id, @Body() WhoUpdate:Who):Promise<Who|null>{
      return this.WhoService.update(id, WhoUpdate);
    }
  
  
    @Delete(':id')
    delete(@Param('id') id){
      this.WhoService.delete(id)
    }
}
