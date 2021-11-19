import { ValueService } from './values.service';
import { Controller, Param, Post } from '@nestjs/common';
import { SetRequestDto } from './dto/set-request.dto';
import { SetResponse } from './dto/set-response.dto';

@Controller()
export class ValueController {
  constructor(private valueService: ValueService) {}

  @Post('set/:apiKey/:key/:value')
  setValue(@Param() setRequestDto: SetRequestDto): Promise<SetResponse> {
    return this.valueService.setValue(setRequestDto);
  }
  @Post('get/:apiKey/:key')
  getValue() {
    return this.valueService.getValue();
  }
}
