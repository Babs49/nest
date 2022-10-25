import { Module } from '@nestjs/common';
import { FootballController } from './football.controller';
import { FootballService } from './football.service';

@Module({
  imports: [
  ],
  controllers: [FootballController],
  providers: [FootballService],
  exports : [FootballService]
})
export class FootballModule { }
