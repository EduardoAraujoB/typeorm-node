import { Connection } from 'typeorm';
import { User } from '../../src/app/entities/user.entity';

async function truncate(connection: Connection): Promise<void> {
  const userRepository = connection.getRepository(User);
  await userRepository.clear();
}

export default truncate;
