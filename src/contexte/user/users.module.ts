import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UserService } from './user.service';
import { USER_REPOSITORY } from './user.repository.interface';
import { UserRepository } from './user.repository';
import { UserCredentialsEntity } from './user.credentials.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserCredentialsEntity])
  ],
  controllers: [UsersController],
  providers: [
    UserService,
    {
      provide: USER_REPOSITORY,
      useClass: UserRepository,
    },
  ],
})
export class UsersModule {}
