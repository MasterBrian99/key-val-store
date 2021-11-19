import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetRequestDto } from './dto/get-request.dto';
import { GetResponse } from './dto/get-response.dto';
import { SetRequestDto } from './dto/set-request.dto';
import { SetResponse } from './dto/set-response.dto';

import { ValueRepository } from './values.repository';

@Injectable()
export class ValueService {
  constructor(
    @InjectRepository(ValueRepository)
    private valueRepository: ValueRepository,
  ) {}

  async setValue(setRequestDto: SetRequestDto): Promise<SetResponse> {
    return this.valueRepository.setValue(setRequestDto);
  }
  async getValue(getRequestDto: GetRequestDto): Promise<GetResponse> {
    return this.valueRepository.getValue(getRequestDto);
  }
}
