import { Values } from './../values/values.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['apiKey'])
export class Register extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  apiKey: string;

  @OneToMany(() => Values, (values) => values.register, { eager: true })
  values: Values[];
}
