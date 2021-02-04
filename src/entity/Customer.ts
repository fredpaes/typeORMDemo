import { Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Entity } from "typeorm";

export enum CustomerIdentifier {
    DNI = "Documento Nacional de Identidad",
    CE = "Carne de Extranjeria",
    PAS = "Pasaporte"
}

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    lastName: string;
    @Column("simple-json")
    identifier: {
        pseudo: CustomerIdentifier,
        value: number
    }
    @CreateDateColumn()
    createDate: Date;
    @UpdateDateColumn()
    updateDate: Date;
    @DeleteDateColumn()
    deleteDate: Date;
}
