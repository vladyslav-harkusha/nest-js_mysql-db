import { Body, Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { User } from './entities/user.entity';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from '@nestjs/passport';
import { IUserRequest } from './interfaces/user-request.interface';
import { ITokens } from './interfaces/tokens.interface';
import { RefreshTokenDto } from './dto/refresh-token.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    async register(@Body() registerDto: RegisterDto): Promise<User> {
        return this.authService.register(registerDto);
    }

    @Post('login')
    async login(@Body() loginDto: LoginDto): Promise<ITokens> {
        return this.authService.login(loginDto);
    }

    @Post('refresh')
    async refresh(@Body() refreshTokenDto: RefreshTokenDto): Promise<ITokens> {
        return this.authService.refresh(refreshTokenDto);
    }

    @Post('logout')
    async logout(@Body() refreshTokenDto: RefreshTokenDto): Promise<void> {
        return this.authService.logout(refreshTokenDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Request() req: IUserRequest) {
        return req.user;
    }
}
