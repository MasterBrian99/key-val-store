import { RegisterRepository } from './../register/register.repository';
import { ValueService } from './values.service';
import { ValueRepository } from './values.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValueController } from './values.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ValueRepository, RegisterRepository])],
  controllers: [ValueController],
  providers: [ValueService],
})
export class ValueModule {}
