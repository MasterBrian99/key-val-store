import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
  async getValue() {
    return this.valueRepository.getValue();
  }
}
