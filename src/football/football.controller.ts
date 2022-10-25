import { Controller, Post, Body } from '@nestjs/common';
import { User } from 'src/auth/user';
import { FootballService } from './football.service';

@Controller('football')
export class FootballController {
  constructor(private footballService: FootballService) {}

  @Post('myplayers')
  async getMyPlayers(@Body() user: User) {
    return this.footballService.getAllCardsFromUser(user);
  }
}
