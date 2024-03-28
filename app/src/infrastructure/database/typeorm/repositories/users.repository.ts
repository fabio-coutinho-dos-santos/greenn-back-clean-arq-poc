import { UsersRepositoryInterface } from 'src/domain/users/users.repository.interface';
import { UserModel } from '../mysql/entities/users.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class UsersRepository implements UsersRepositoryInterface {
	constructor(
		@InjectRepository(UserModel)
		private readonly usersRepository: Repository<UserModel>,
	) {}

	create() {
		throw new Error('Method not implemented.');
	}

	async findOne(id: number) {
		return await this.usersRepository.findOneBy({ id });
	}
}
