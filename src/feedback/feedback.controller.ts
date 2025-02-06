import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { Feedback } from 'src/entities/feedback';


@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Get()
  getAll(): Promise<Feedback[]>  {
    return this.feedbackService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id): Promise<Feedback|null>  {
    return this.feedbackService.getById(id);
  }

  @Post()
  create(@Body() feedbackRequest:Feedback):Promise<Feedback|null>{
    return this.feedbackService.create(feedbackRequest);
  }

  @Put(':id')
  update(@Param('id') id, @Body() feedbackUpdate:Feedback):Promise<Feedback|null>{
    return this.feedbackService.update(id, feedbackUpdate);
  }


  @Delete(':id')
  delete(@Param('id') id){
    this.feedbackService.delete(id)
  }
}
