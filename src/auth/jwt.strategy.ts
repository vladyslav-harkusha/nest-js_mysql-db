import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { IJWTPayload } from './interfaces/jwt-payload.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Token } from './entities/token.entity';
import { Repository } from 'typeorm';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly configService: ConfigService,
        @InjectRepository(Token)
        private readonly tokenRepository: Repository<Token>,
    ) {
        const jwtSecret = configService.get<string>('JWT_SECRET') || '';

        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtSecret,
        });
    }

    async validate(payload: IJWTPayload) {
        const tokenEntity = await this.tokenRepository.findOne({
            where: { jti: payload.jti, isBlocked: false },
            relations: ['user'],
        });

        if (!tokenEntity) {
            throw new UnauthorizedException('Token is blocked or invalid');
        }

        return { payload };
    }
}
