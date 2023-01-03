import { IsString, IsUrl } from "class-validator";

export class CreateProjectDto {
  @IsString()
  name?: string;

  @IsString()
  @IsUrl()
  image?: string;

  @IsString()
  description?: string;
}

export class EditProjectDto extends CreateProjectDto {}