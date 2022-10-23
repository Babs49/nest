import { Body, Controller, Get, Header, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { FADataDto } from './fa-data-dto';
import { SorareService } from './sorare.service';
import { UserAuthDto } from './user-auth-dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly sorareService: SorareService,
  ) {}

  @Get()
  @Header('content-type', 'application/json')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  getTest() {
    return this.appService.getTest();
  }

  @Post('/auth')
  async getInfosUser(@Body() userAuthDto: UserAuthDto) {
    console.log('user auth dto ', userAuthDto);
    return this.sorareService.signIn(userAuthDto);
  }

 @Post('/authfa')
  async connectWith2FA(@Body() faDataDto: FADataDto) {
    console.log('Controller data from body ', faDataDto);
    return this.sorareService.signInWith2FA(faDataDto);
  }

}
