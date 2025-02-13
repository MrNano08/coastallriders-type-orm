import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Package } from 'src/entities/packages';
import { PackageController } from 'src/package/package.controller';
import { PackageService } from 'src/package/package.service';

@Module({
  imports: [TypeOrmModule.forFeature([Package])],
  controllers: [PackageController],
  providers: [PackageService],
})
export class PackageModule {}
