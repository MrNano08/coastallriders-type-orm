import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hero } from './entities/hero';
import { HeroModule } from './modules/hero.module';
import { Feedback } from './entities/feedback';
import { FeedbackModule } from './modules/feedback.module';
import { Package } from './entities/packages';
import { PackageModule } from './modules/packages.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Admin',
      database: 'coastallriders',
      entities: [Hero, Feedback, Package],
      synchronize: true, 
        }),
    HeroModule,
    FeedbackModule,
    PackageModule
  ],
})
export class DatabaseModule {}
