import { DATA_TYPES } from "../utils/constants";

export type StorageKey = 'token' | 'user';

export const STORAGE_KEYS: {
  TOKEN: 'token';
  USER: 'user';
} = {
  TOKEN: 'token',
  USER: 'user',
};

export const STORAGE_SCHEMA = {
  token: DATA_TYPES.STRING,
  user: DATA_TYPES.OBJECT,
};
