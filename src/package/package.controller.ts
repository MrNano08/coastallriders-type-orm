import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PackageService } from './package.service';
import { Package } from 'src/entities/packages';


@Controller('package')
export class PackageController {
  constructor(private readonly PackageService: PackageService) {}

  @Get()
  getAll(): Promise<Package[]>  {
    return this.PackageService.getAll();
  }

    @Get(':id')
    getById(@Param('id') id): Promise<Package|null>  {
      return this.PackageService.getById(id);
    }
  
    @Post()
    create(@Body() PackageRequest:Package):Promise<Package|null>{
      return this.PackageService.create(PackageRequest);
    }
  
    @Put(':id')
    update(@Param('id') id, @Body() PackageUpdate:Package):Promise<Package|null>{
      return this.PackageService.update(id, PackageUpdate);
    }
  
  
    @Delete(':id')
    delete(@Param('id') id){
      this.PackageService.delete(id)
    }
}
