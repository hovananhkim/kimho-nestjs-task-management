import { ConfigService } from '@nestjs/config';
import { JwtPayload } from './jwt-payload.interface';
import { User } from './user.entity';
import { UserRepository } from './users.repository';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private userRepository;
    private configService;
    constructor(userRepository: UserRepository, configService: ConfigService);
    validate(payload: JwtPayload): Promise<User>;
}
export {};
