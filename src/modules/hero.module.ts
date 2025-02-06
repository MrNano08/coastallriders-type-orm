import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hero } from 'src/entities/hero';
import { HeroController } from 'src/hero/hero.controller';
import { HeroService } from 'src/hero/hero.service';

@Module({
  imports: [TypeOrmModule.forFeature([Hero])],
  controllers: [HeroController],
  providers: [HeroService],
})
export class HeroModule {}
