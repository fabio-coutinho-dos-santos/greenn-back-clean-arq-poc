import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { API_CONFIG } from 'src/config';
import { UsersRepositoryInterface } from 'src/domain/users/users.repository.interface';

@Controller(`${API_CONFIG.API_PREFIX}/${API_CONFIG.API_VERSION}/users`)
@ApiTags('Users')
export class UsersController {
  constructor(
    @Inject('UsersRepositoryInterface')
    private readonly usersRepository: UsersRepositoryInterface,
  ) {}

  @Get(':id')
  async findById(@Param('id') id: number) {
    return await this.usersRepository.findOne(id);
  }
}
