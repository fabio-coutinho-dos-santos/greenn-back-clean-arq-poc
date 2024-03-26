import { UsersRepositoryInterface } from 'src/domain/users/users.repository.interface';

export class UsersRepository implements UsersRepositoryInterface {
  create() {
    throw new Error('Method not implemented.');
  }
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
