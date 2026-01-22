import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from './user.repository.interface';
import type { IUserRepository } from './user.repository.interface';
import { UserCredentialsEntity } from './user.credentials.entity';
import bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepo: IUserRepository,
  ) {}

  async findUserByEmail(email: string): Promise<UserCredentialsEntity | null> {
    return this.userRepo.findUserByEmail(email);
  }

  async createUser(user: UserCredentialsEntity): Promise<UserCredentialsEntity> {
    // Hasher le password avant de le stocker
    const saltRounds = 10;
    user.passwordHash = await bcrypt.hash(user.passwordHash, saltRounds);
    
    return this.userRepo.createUser(user);
  }

  async updatePassword(email: string, newPassword: string): Promise<UserCredentialsEntity | null> {
    // Hasher le nouveau password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
    
    return this.userRepo.updatePassword(email, hashedPassword);
  }

  async deleteUser(email: string): Promise<boolean> {
    return this.userRepo.deleteUser(email);
  }
}
