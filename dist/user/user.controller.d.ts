import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DashGateway } from '../dash/dash.gateway';
export declare class UserController {
    private readonly userService;
    private readonly ws;
    constructor(userService: UserService, ws: DashGateway);
    create(createUserDto: CreateUserDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
