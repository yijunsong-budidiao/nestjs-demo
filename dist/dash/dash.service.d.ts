import { CreateDashDto } from './dto/create-dash.dto';
import { UpdateDashDto } from './dto/update-dash.dto';
export declare class DashService {
    create(createDashDto: CreateDashDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDashDto: UpdateDashDto): string;
    remove(id: number): string;
}
