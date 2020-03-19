import {
  Entity,
  BeforeInsert,
  PrimaryGeneratedColumn,
  Unique,
  Column,
} from 'typeorm';
import bcrypt from 'bcryptjs';

@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  async encriptPassword(): Promise<void> {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
