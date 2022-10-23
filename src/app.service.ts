import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): string {
    const message = 'Hello world';
    return message;
  }

  getTest(): string[] {
    return ['Test 1', 'Test 2'];
  }

}
