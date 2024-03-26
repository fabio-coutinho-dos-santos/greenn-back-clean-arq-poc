import { Module } from '@nestjs/common';
import { UsersController } from '../../infrastructure/api/users/controller/users.controller';
import { UsersRepository } from 'src/infrastructure/database/typeorm/repositories/users.repository';

@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: 'UsersRepositoryInterface',
      useClass: UsersRepository
    },
  ]
})
export class UsersModule {}
