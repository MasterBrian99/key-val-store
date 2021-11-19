import * as generateApiKey from 'generate-api-key';
import { Register } from './register.entity';
import { EntityRepository, Repository } from 'typeorm';
import { RegisterResponse } from './dto/register-response.dto';
import { InternalServerErrorException } from '@nestjs/common';

@EntityRepository(Register)
export class RegisterRepository extends Repository<Register> {
  async createAccount(): Promise<RegisterResponse> {
    const register = new Register();
    const key = await this.generateKey();
    try {
      const isExist = this.find({ where: { apiKey: key } });

      if (isExist) {
        register.apiKey = await this.generateKey();
      } else {
        register.apiKey = key;
      }
      await this.save(register);
    } catch (error) {
      throw new InternalServerErrorException('Something Went Wrong !');
    }

    const registerResponse = new RegisterResponse();
    registerResponse.statusCode = 201;
    registerResponse.message = 'success !';
    registerResponse.apiKey = register.apiKey;
    return registerResponse;
  }

  async generateKey(): Promise<string> {
    const key = await generateApiKey({
      method: 'uuidv4',
      dashes: false,
    });
    return key;
  }
}
