import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { AUTH_REPOSITORY } from './auth.repository.interface';
import type { IAuthRepository } from './auth.repository.interface';

@Injectable()
export class AuthService {
  constructor(
    @Inject(AUTH_REPOSITORY) private readonly authRepo: IAuthRepository,
  ) {}

  async loginUserCase(){}
  private readonly user = {
    email: 'test@test.com',
    username: 'john',
    password: '123456',
  };

  login(email: string, username: string, password: string) {
    const isValid =
      email === this.user.email &&
      username === this.user.username &&
      password === this.user.password;

    if (!isValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return {
      email,
      username,
      password
    };
  }
}
