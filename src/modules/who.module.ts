import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Who } from 'src/entities/who';
import { WhoController } from 'src/who/who.controller';
import { WhoService } from 'src/who/who.service';

@Module({
  imports: [TypeOrmModule.forFeature([Who])],
  controllers: [WhoController],
  providers: [WhoService],
})
export class WhoModule {}
