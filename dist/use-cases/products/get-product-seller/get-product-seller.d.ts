import { UsersRepositoryInterface } from 'src/domain/users/users.repository.interface';
export declare class GetProductSeller {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepositoryInterface);
    execute(sellerId: number): Promise<any>;
}
