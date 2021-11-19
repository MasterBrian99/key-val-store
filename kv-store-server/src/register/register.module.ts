import { RegisterRepository } from './register.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';

@Module({
  imports: [TypeOrmModule.forFeature([RegisterRepository])],
  controllers: [RegisterController],
  providers: [RegisterService],
})
export class RegisterModule {}
