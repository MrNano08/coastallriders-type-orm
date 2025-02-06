import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feedback } from 'src/entities/feedback';
import { create } from 'domain';

@Injectable()
export class FeedbackService {

    constructor(
         @InjectRepository(Feedback)
         private feedbackRepository: Repository<Feedback>,
    ){}

    getAll(): Promise<Feedback[]> {
        return this.feedbackRepository.find();
    }

    getById(id: number): Promise <Feedback | null>{
        return this.feedbackRepository.findOne({where: {id: id}})
    }

    async create(newFeedback: Feedback): Promise<Feedback | null>{
        const addedFeedback = this.feedbackRepository.create(newFeedback);
        await this.feedbackRepository.save(addedFeedback);
        return addedFeedback;
      }

    async update(id:number, updateFeedback: Feedback): Promise<Feedback|null>{ 
      await this.feedbackRepository.update(id, updateFeedback);
      return this.feedbackRepository.findOne({where: {id: id} });
  }

  async delete(id:number){
    this.feedbackRepository.delete(id);
  }

}

