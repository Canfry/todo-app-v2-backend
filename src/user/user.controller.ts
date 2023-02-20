import { Controller, UseGuards, Get } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guards';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  @Get('profile')
  getProfile(@GetUser() user: User) {
    return user;
  }
}
