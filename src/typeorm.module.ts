import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            // host: '127.0.0.1',
            port: 3307,
            username: 'tolik',
            password: 'tolikPass',
            database: 'my-nestjs-db',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
        }),
    ],
})
export class TypeormModule {}
