import { AuthService } from './auth.service';
import { AuthCredentailsDto } from './dto/auth-credentails.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(authCredentailsDto: AuthCredentailsDto): Promise<void>;
    signin(authCredentailsDto: AuthCredentailsDto): Promise<{
        accessToken: string;
    }>;
}
