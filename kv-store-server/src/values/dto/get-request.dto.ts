import { IsNotEmpty, IsString } from 'class-validator';

export class GetRequestDto {
  @IsString()
  @IsNotEmpty()
  apiKey: string;

  @IsString()
  @IsNotEmpty()
  key: string;
}
