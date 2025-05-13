import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Column } from 'typeorm/browser';

@Entity()
export class Table {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    type: string;
    @Column()
    width: number;
    @Column()
    height: number;
    @Column({ default: true })
    inStock: boolean;
}
