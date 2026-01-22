import { Body, Controller, Post, Put, Delete, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { UserCredentialsEntity } from './user.credentials.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() body: any) {
    console.log('Body reçu:', body);
    
    const newUser = new UserCredentialsEntity();
    newUser.email = body?.email;
    newUser.passwordHash = body?.password;

    return this.userService.createUser(newUser);
  }

  @Put(':email')
  async updatePassword(@Param('email') email: string, @Body() body: any) {
    return this.userService.updatePassword(email, body?.password);
  }

  @Delete(':email')
  async deleteUser(@Param('email') email: string) {
    const deleted = await this.userService.deleteUser(email);
    return {
      message: deleted ? 'Utilisateur supprimé' : 'Utilisateur non trouvé',
      success: deleted
    };
  }
}
