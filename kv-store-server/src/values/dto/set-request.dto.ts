import { IsNotEmpty, IsString } from 'class-validator';

export class SetRequestDto {
  @IsString()
  apiKey: string;

  @IsString()
  key: string;

  @IsString()
  @IsNotEmpty()
  value: string;
}
