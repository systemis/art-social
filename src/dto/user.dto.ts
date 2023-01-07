import { IsString } from "class-validator";

/**
 * The dto to update user profile.
 */
export class UpdateUserDto {
  description?: string;
  @IsString()

  linkedin?: string;

  @IsString()
  twitter?: string;

  @IsString()
  instagram?: string;

  @IsString()
  job?: string;

  @IsString()
  mobile?: string;

  @IsString()
  picture?: string;

  @IsString()
  username?: string;

  @IsString()
  email?: string;

  @IsString()
  name?: string;
  
  @IsString()
  family_name?: string;

  @IsString()
  given_name?: string;

  @IsString()
  location?: string;
}

export class ChangeUserPasswordDto {
  @IsString()
  newPassword: string;
  
  @IsString()
  oldPassword: string;
}
