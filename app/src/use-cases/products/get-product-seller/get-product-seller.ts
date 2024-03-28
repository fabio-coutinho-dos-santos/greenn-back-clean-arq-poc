import { UsersRepositoryInterface } from 'src/domain/users/users.repository.interface';

export class GetProductSeller {
	constructor(private readonly usersRepository: UsersRepositoryInterface) {}

	async execute(sellerId: number) {
		return await this.usersRepository.findOne(sellerId);
	}
}
