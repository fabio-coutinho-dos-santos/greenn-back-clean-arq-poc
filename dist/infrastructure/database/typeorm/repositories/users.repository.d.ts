import { UsersRepositoryInterface } from 'src/domain/users/users.repository.interface';
import { UserModel } from '../mysql/entities/users.model';
import { Repository } from 'typeorm';
export declare class UsersRepository implements UsersRepositoryInterface {
    private readonly usersRepository;
    constructor(usersRepository: Repository<UserModel>);
    create(): void;
    findOne(id: number): Promise<UserModel>;
}
