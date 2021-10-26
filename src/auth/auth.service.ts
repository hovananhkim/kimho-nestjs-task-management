import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentailsDto } from './dto/auth-credentails.dto';
import { UserRepository } from './users.repository';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}
  signUp(authCredentailsDto: AuthCredentailsDto): Promise<void> {
    return this.userRepository.createUser(authCredentailsDto);
  }

  async signIn(authCredentailsDto: AuthCredentailsDto): Promise<{accessToken: string}> {
    const { email, password } = authCredentailsDto;
    const user = await this.userRepository.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const payload: JwtPayload = { email };
      const accessToken: string = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Please check your login credentials');
    }
  }
}
