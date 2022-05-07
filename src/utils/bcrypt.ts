import * as bcrypt from 'bcrypt';

export function hashPassword(rawPassowrd: string): Promise<string> {
  const salt = bcrypt.genSaltSync();
  const hashedPassword = bcrypt.hash(rawPassowrd, salt);
  return hashedPassword;
}

export function comparePassword(plainPassword: string, hash: string) {
  return bcrypt.compareSync(plainPassword, hash);
}
