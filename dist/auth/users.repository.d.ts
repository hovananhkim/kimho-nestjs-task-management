import { Repository } from 'typeorm';
import { AuthCredentailsDto } from './dto/auth-credentails.dto';
import { User } from './user.entity';
export declare class UserRepository extends Repository<User> {
    createUser(authCredentailsDto: AuthCredentailsDto): Promise<void>;
}
