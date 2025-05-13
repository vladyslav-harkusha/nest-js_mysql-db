import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
