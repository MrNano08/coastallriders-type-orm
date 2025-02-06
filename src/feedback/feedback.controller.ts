import { Controller, Get } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { Feedback } from 'src/entities/feedback';


@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Get()
  getAll(): Promise<Feedback[]>  {
    return this.feedbackService.getAll();
  }
}
