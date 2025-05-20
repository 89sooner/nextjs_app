import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  findAll() {
    return this.todoRepository.find();
  }

  create(text: string) {
    const todo = this.todoRepository.create({ text });
    return this.todoRepository.save(todo);
  }
}
