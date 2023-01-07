import { IsString, IsArray } from "class-validator";

export class CreateProductDto  {
  @IsString()
  name?: string

  @IsArray()
  gallery?: string[]

  @IsString()
  description?: string;

  @IsArray()
  tags?: string[]

  @IsString()
  projectId?: string[]
}

export class EditProductDto extends CreateProductDto {}