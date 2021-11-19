import { Register } from './../register/register.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'values' })
export class Values extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  key: string;

  @Column()
  value: string;

  @ManyToOne(() => Register, (register) => register.values, {
    eager: false,
    cascade: true,
  })
  register: Register;
}
