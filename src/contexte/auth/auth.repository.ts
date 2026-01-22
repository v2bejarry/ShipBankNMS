import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserCredentialsEntity } from '../user/user.credentials.entity';
import { IAuthRepository } from './auth.repository.interface';

@Injectable()
export class AuthRepository implements IAuthRepository {
  constructor(
    @InjectRepository(UserCredentialsEntity)
    private readonly credentailRepository: Repository<UserCredentialsEntity>,
  ) {}

  async findCredentialByEmail(
    email: string,
  ): Promise<UserCredentialsEntity | null> {
    const entity = await this.credentailRepository.findOne({
      where: { email },
    });

    // (optionnel) test de création
    const test = this.credentailRepository.create({
      email: 'qsdqsd',
    });

    await this.credentailRepository.save(test);

    return entity;
  }
}
