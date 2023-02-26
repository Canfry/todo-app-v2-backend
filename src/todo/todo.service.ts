import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}
  async create(dto: CreateTodoDto, userId: string) {
    const todo = await this.prisma.todo.create({
      data: {
        userId,
        ...dto,
      },
    });

    return todo;
  }

  findAll(userId: string) {
    return this.prisma.todo.findMany({
      where: {
        userId,
      },
    });
  }

  findOne(userId: string, todoId: string) {
    return this.prisma.todo.findFirst({
      where: {
        id: todoId,
        userId,
      },
    });
  }

  async update(userId: string, todoId: string, dto: UpdateTodoDto) {
    // Get todo by Id
    const todo = await this.prisma.todo.findUnique({
      where: {
        id: todoId,
      },
    });
    // Check if user owns todo
    if (!todo || todo.userId !== userId)
      throw new ForbiddenException('Access to resources denied');
    // Update Todo
    return this.prisma.todo.update({
      where: {
        id: todoId,
      },
      data: {
        ...dto,
      },
    });
  }

  async remove(userId: string, todoId: string) {
    const todo = await this.prisma.todo.findUnique({
      where: {
        id: todoId,
      },
    });
    // Check if user owns todo
    if (!todo || todo.userId !== userId)
      throw new ForbiddenException('Access to resources denied');
    // Delete Todo
    return this.prisma.todo.delete({
      where: {
        id: todoId,
      },
    });
  }
}
