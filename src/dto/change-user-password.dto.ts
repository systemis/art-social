import { IsString } from "class-validator";

export class ChangeUserPasswordDto {
  @IsString()
  password: string;
}
