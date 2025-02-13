import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Package } from 'src/entities/packages';

@Injectable()
export class PackageService {

    constructor(
         @InjectRepository(Package)
         private PackageRepository: Repository<Package>,
    ){}

    getAll(): Promise<Package[]> {
        return this.PackageRepository.find();
    }

    getById(id: number): Promise <Package | null>{
            return this.PackageRepository.findOne({where: {id: id}})
        }
    
        async create(newPackage: Package): Promise<Package | null>{
            const addedPackage = this.PackageRepository.create(newPackage);
            await this.PackageRepository.save(addedPackage);
            return addedPackage;
          }
    
        async update(id:number, updatePackage: Package): Promise<Package|null>{ 
          await this.PackageRepository.update(id, updatePackage);
          return this.PackageRepository.findOne({where: {id: id} });
      }
    
      async delete(id:number){
        this.PackageRepository.delete(id);
      }
  }

