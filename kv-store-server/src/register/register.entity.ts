import {
  BaseEntity,
  Column,
  Entity,
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
}
