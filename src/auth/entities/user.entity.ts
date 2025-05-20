import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Token } from './token.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 'lol');
    }

    @OneToMany(() => Token, (token) => token.user)
    tokens: Token[];

    async validatePassword(pass: string): Promise<boolean> {
        return bcrypt.compare(pass, this.password);
    }
}
