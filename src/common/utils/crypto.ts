import { User } from '../models/user';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

export const hashPassword = async (password: string): Promise<string> => {
  const hash = await bcrypt.hash(password, 10);

  return hash;
};

export const comparePassword = async (passwods: string, hash: string = ''): Promise<boolean> => {
  const result: boolean = bcrypt.compare(passwods, hash);

  return result;
};

export const jwtSign = (user: User) => {
  const { id } = user;

  return jwt.sign(
    { id },
    process.env.JWT_SECRET,
  );
};

export const jwtVerify = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

export const getToken = (authHeader: string): string | undefined => {
  if (authHeader && authHeader.length) {
    const parts: string[] = authHeader.split(/\s+/);

    if (parts[0].toLowerCase() !== 'bearer' || parts.length !== 2) {
      return;
    }

    return parts[1];
  }
};
