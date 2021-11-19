import { RegisterModule } from './register/register.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), RegisterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
