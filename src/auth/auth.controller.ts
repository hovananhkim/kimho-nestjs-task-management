import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthCredentailsDto } from './dto/auth-credentails.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/signup')
  signUp(@Body() authCredentailsDto: AuthCredentailsDto): Promise<void> {
    return this.authService.signUp(authCredentailsDto);
  }

  @Post('/signin')
  signin(
    @Body() authCredentailsDto: AuthCredentailsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentailsDto);
  }
}
