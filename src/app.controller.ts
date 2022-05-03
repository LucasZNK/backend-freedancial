import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  //1 Goes to ward and validate user, if user is ok return user to login
  //2 login now have the user in the req.
  //3 Pass the user to the login service
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    console.log(req.user);
    return this.authService.login(req.user); //TODO: return JWT
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req): string {
    return req.user;
  }
}
