import { UsersRepositoryInterface } from '../../../../domain/users/users.repository.interface';
export declare class UsersController {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepositoryInterface);
    findById(id: number): Promise<any>;
}
