import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackController } from 'src/feedback/feedback.controller';
import { FeedbackService } from 'src/feedback/feedback.service';
import { Feedback } from 'src/entities/feedback';

@Module({
  imports: [TypeOrmModule.forFeature([Feedback])],
  controllers: [FeedbackController],
  providers: [FeedbackService],
})
export class FeedbackModule {}
 