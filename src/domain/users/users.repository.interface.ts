import { RepositoryInterface } from '../@Shared/repository.interface';
import { UserModel } from 'src/infrastructure/database/typeorm/mysql/entities/users.model';

export interface UsersRepositoryInterface extends RepositoryInterface<UserModel> {}
