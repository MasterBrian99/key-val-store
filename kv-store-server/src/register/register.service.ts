import { RegisterRepository } from './register.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterResponse } from './dto/register-response.dto';

@Injectable()
export class RegisterService {
  constructor(
    @InjectRepository(RegisterRepository)
    private registerRepository: RegisterRepository,
  ) {}

  async createAccount(): Promise<RegisterResponse> {
    return this.registerRepository.createAccount();
  }
}
