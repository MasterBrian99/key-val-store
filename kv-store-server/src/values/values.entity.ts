import { Register } from './../register/register.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity({ name: 'values' })
@Unique(['key'])
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
