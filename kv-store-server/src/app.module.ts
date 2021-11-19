import { RegisterModule } from './register/register.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ValueModule } from './values/values.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), RegisterModule, ValueModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
