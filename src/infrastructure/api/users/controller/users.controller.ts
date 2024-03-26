import { Controller, Get, Inject, Param } from '@nestjs/common';
import { UsersRepositoryInterface } from 'src/domain/users/users.repository.interface';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('UsersRepositoryInterface')
    private readonly usersRepository: UsersRepositoryInterface
    ) {}

  @Get(':id')
  async findById(@Param('id') id: number) {
    return await this.usersRepository.findOne(id);
  }
}
