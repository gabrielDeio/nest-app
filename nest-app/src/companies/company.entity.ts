import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['cnpj'])
export class Company extends BaseEntity {
    
    @PrimaryGeneratedColumn('uuid')
    id : string;

    @Column({nullable : false, type : 'varchar', length : 200})
    name : string;

    @Column({nullable : false, type: 'varchar', length: 200})
    cnpj : string;

    @Column({nullable : false, type: 'varchar', length: 200})
    adress : string;

    @Column({nullable : false, type: 'varchar', length: 200})
    phoneNumber : string;

    @CreateDateColumn()
    createdAt : Date;

    @CreateDateColumn()
    updatedAt : Date;
}