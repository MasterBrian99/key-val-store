import { Values } from './values.entity';
import { Connection, EntityRepository, Repository } from 'typeorm';
import { SetRequestDto } from './dto/set-request.dto';
import { Register } from 'src/register/register.entity';

import { BadRequestException, UnauthorizedException } from '@nestjs/common';
import { SetResponse } from './dto/set-response.dto';

@EntityRepository(Values)
export class ValueRepository extends Repository<Values> {
  constructor(private connection: Connection) {
    super();
  }
  async setValue(setRequestDto: SetRequestDto): Promise<SetResponse> {
    const apiKey = setRequestDto.apiKey;
    const value = new Values();
    value.key = setRequestDto.key;
    value.value = setRequestDto.value;
    try {
      const registerdUser = await this.connection
        .getRepository(Register)
        .findOne({ where: { apiKey: apiKey } });

      if (!registerdUser) {
        throw new UnauthorizedException('Api key validation Failed !');
      }
      value.register = registerdUser;

      const isKeyUsed = await this.findOne({
        where: { key: setRequestDto.key },
      });

      if (isKeyUsed) {
        throw new BadRequestException('Key is already Used !');
      }

      await this.save(value);
    } catch (error) {
      throw error;
    }

    const setResponse = new SetResponse();
    setResponse.key = value.key;
    setResponse.value = value.value;
    return setResponse;
  }

  async getValue() {
    return 'asd';
  }
}
