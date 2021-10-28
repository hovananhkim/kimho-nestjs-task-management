import { AuthCredentailsDto } from './dto/auth-credentails.dto';
import { UserRepository } from './users.repository';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    signUp(authCredentailsDto: AuthCredentailsDto): Promise<void>;
    signIn(authCredentailsDto: AuthCredentailsDto): Promise<{
        accessToken: string;
    }>;
}
