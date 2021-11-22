import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxDate,
  MaxLength,
  MinLength,
} from 'class-validator';

export class AuthCredentailsDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(32)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password is too weak',
  })
  password: string;
}
