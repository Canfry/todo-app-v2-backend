import { Controller, UseGuards, Get } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator/GetUser.decorator';
import { JwtGuard } from '../auth/guards/jwt.guards';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  @Get('profile')
  getProfile(@GetUser() user: User) {
    return user;
  }
}
