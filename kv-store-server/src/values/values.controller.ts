import { GetRequestDto } from './dto/get-request.dto';
import { ValueService } from './values.service';
import { Controller, Get, Param } from '@nestjs/common';
import { SetRequestDto } from './dto/set-request.dto';
import { SetResponse } from './dto/set-response.dto';
import { GetResponse } from './dto/get-response.dto';

@Controller()
export class ValueController {
  constructor(private valueService: ValueService) {}

  @Get('set/:apiKey/:key/:value')
  setValue(@Param() setRequestDto: SetRequestDto): Promise<SetResponse> {
    return this.valueService.setValue(setRequestDto);
  }
  @Get('get/:apiKey/:key')
  getValue(@Param() getRequestDto: GetRequestDto): Promise<GetResponse> {
    return this.valueService.getValue(getRequestDto);
  }
}
