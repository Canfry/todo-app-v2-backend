import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { JwtGuard } from '../auth/guards';
import { GetUser } from '../auth/decorator';

@UseGuards(JwtGuard)
@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post('new')
  create(@GetUser('id') userId: string, @Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto, userId);
  }

  @Get()
  findAll(@GetUser('id') userId: string) {
    return this.todoService.findAll(userId);
  }

  @Get(':id')
  findOne(@GetUser('id') userId: string, @Param('id') todoId: string) {
    return this.todoService.findOne(userId, todoId);
  }

  @Patch(':id')
  update(
    @GetUser('id') userId: string,
    @Param('id') todoId: string,
    @Body() dto: UpdateTodoDto,
  ) {
    return this.todoService.update(userId, todoId, dto);
  }

  @HttpCode(201)
  @Delete(':id')
  remove(@GetUser('id') userId: string, @Param('id') todoId: string) {
    return this.todoService.remove(userId, todoId);
  }
}
