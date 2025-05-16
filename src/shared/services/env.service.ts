import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvService {
    public readonly jwtSecret: string;
    public readonly accessTokenExpirationTime: number;
    public readonly refreshTokenExpirationTime: number;

    public readonly dbType: string;
    public readonly dbHost: string;
    public readonly dbPort: number;
    public readonly dbUsername: string;
    public readonly dbPassword: string;
    public readonly dbDatabase: string;

    constructor(private configService: ConfigService) {
        this.jwtSecret = configService.get<string>(
            'JWT_SECRET',
            '03c59c81ceb11ff586ae8525eaeff140f23bc0f1f65048814870048e44eaaa5c06383f334497e3a3',
        );
        this.accessTokenExpirationTime = configService.get<number>('ACCESS_TOKEN_EXPIRATION_TIME', 600);
        this.refreshTokenExpirationTime = configService.get<number>('REFRESH_TOKEN_EXPIRATION_TIME', 1200);

        this.dbType = configService.get<string>('DB_TYPE', 'mysql');
        this.dbHost = configService.get<string>('DB_HOST', 'localhost');
        this.dbPort = configService.get<number>('DB_PORT', 3307);
        this.dbUsername = configService.get<string>('DB_USERNAME', 'tolik');
        this.dbPassword = configService.get<string>('DB_PASSWORD', 'tolikPass');
        this.dbDatabase = configService.get<string>('DB_DATABASE', 'my-nestjs-db');
    }
}
