import { IsNotEmpty } from 'class-validator';

IsNotEmpty;

export class CreateBoardDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
