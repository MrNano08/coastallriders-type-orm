import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feedback } from 'src/entities/feedback';

@Injectable()
export class FeedbackService {

    constructor(
         @InjectRepository(Feedback)
         private feedbackRepository: Repository<Feedback>,
    ){}

    getAll(): Promise<Feedback[]> {
        return this.feedbackRepository.find();
    }
  }

