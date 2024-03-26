import { UsersRepositoryInterface } from 'src/domain/users/users.repository.interface';
import { UserModel } from '../mysql/entities/users.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'

export class UsersRepository implements UsersRepositoryInterface {

  @InjectRepository(UserModel)
  private readonly usersRepository: Repository<UserModel>

  create() {
    throw new Error('Method not implemented.');
  }
  // async findOne(id: number) {
  //   return await this.usersRepository.findOneBy({id});
  // }
  
  findOne(id: number) {
    return {
      id: 278,
      name: 'Dev Greenn Test',
      cellphone: '+5544998741312',
      is_heaven: 1,
      is_greenn: 1,
      company_id: 1747,
      internacional_company_id: 4517
    };
  }
  
}
