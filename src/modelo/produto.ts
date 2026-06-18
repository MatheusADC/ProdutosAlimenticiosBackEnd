/* eslint-disable */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'produto' })
export class Produto {

    @PrimaryGeneratedColumn()
    codigo: number;

    @Column({ type: 'varchar', length: 30, nullable: false })
    descricao: string;

    @Column({ type: 'varchar', length: 30, nullable: false })
    marca: string;

    @Column({ type: 'decimal', precision: 8, scale: 2, nullable: false })
    valor: number;
}