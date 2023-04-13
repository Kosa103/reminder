import { STORAGE_KEYS } from "@/storage/storageHandlers/config";
import {
  getLocalStorage,
  getSessionStorage,
  removeFromLocalStorage,
  removeFromSessionStorage,
  setLocalStorage,
  setSessionStorage,
} from "@/storage/storageHandlers/operations";
import { User } from "../models/user";

export const classnames = (...args: unknown[]): string => {
  return [...args]
    .map(argument => {
      if (typeof argument === 'number' && !Number.isNaN(argument)) {
        return String(argument);
      }
      if (typeof argument !== 'string') {
        return '';
      }
      return argument;
    })
    .filter(argument => !!argument)
    .join(' ');
};

export const handleTokenStorage = {
  set: (token: string, rememberMe: boolean = true) => {
    if (rememberMe) {
      setLocalStorage(STORAGE_KEYS.TOKEN, token);
    } else {
      setSessionStorage(STORAGE_KEYS.TOKEN, token);
    }
  },
  get: (): any | null => {
    const sessionToken: any | null = getSessionStorage(STORAGE_KEYS.TOKEN);
    const localToken: any | null = getLocalStorage(STORAGE_KEYS.TOKEN);

    return sessionToken || localToken;
  },
  remove: (): void => {
    removeFromSessionStorage(STORAGE_KEYS.TOKEN);
    removeFromLocalStorage(STORAGE_KEYS.TOKEN);
  },
};

export const handleUserStorage = {
  set: (user: User, rememberMe: boolean = true): void => {
    if (rememberMe) {
      setLocalStorage(STORAGE_KEYS.USER, user);
    } else {
      setSessionStorage(STORAGE_KEYS.USER, user);
    }
  },
  get: (): User | null => {
    const sessionUser: User | null = (getSessionStorage(STORAGE_KEYS.USER));
    const localUser: User | null = getLocalStorage(STORAGE_KEYS.USER);

    return sessionUser || localUser;
  },
  remove: (): void => {
    removeFromSessionStorage(STORAGE_KEYS.USER);
    removeFromLocalStorage(STORAGE_KEYS.USER);
  },
};