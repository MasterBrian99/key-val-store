import { Controller, Post } from '@nestjs/common';
import { RegisterResponse } from './dto/register-response.dto';
import { RegisterService } from './register.service';

@Controller('create')
export class RegisterController {
  constructor(private registerService: RegisterService) {}

  @Post('/')
  async createAccount(): Promise<RegisterResponse> {
    return this.registerService.createAccount();
  }
}
