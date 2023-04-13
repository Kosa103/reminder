
import { DATA_TYPES } from '../utils/constants';
import { StorageKey, STORAGE_SCHEMA } from './config';

export const setLocalStorage = (key: StorageKey, value: any): void => {
  if (!Object.keys(STORAGE_SCHEMA).some(storageKey => key === storageKey)) {
    throw new Error(`Undefined storage key ${key}. Define this key in STORAGE_KEYS and STORAGE_SCHEMA`);
  }

  const dataType: string = STORAGE_SCHEMA[key];

  if (typeof value === DATA_TYPES.OBJECT) {
    if (value instanceof Array && dataType !== DATA_TYPES.ARRAY) {
      throw new Error(`Incorrect value type. Array was expected.`);
    }
    if (value instanceof Object && !(value instanceof Array) && dataType !== DATA_TYPES.OBJECT) {
      throw new Error(`Incorrect value type. Object was expected.`);
    }
  } else if (typeof value !== dataType) {
    throw new Error(`Incorrect value type. ${dataType} was expected, ${typeof value} was provided.`);
  }
  
  if (typeof value === DATA_TYPES.OBJECT) {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, value);
  }
};

export const getLocalStorage = (key: StorageKey): any => {
  if (!Object.keys(STORAGE_SCHEMA).some(storageKey => key === storageKey)) {
    throw new Error(`Undefined storage key ${key}. Define this key in STORAGE_KEYS and STORAGE_SCHEMA`);
  }

  const dataType: string = STORAGE_SCHEMA[key];
  const value: string | null = localStorage.getItem(key);

  if (dataType === DATA_TYPES.STRING) {
    return value;
  } else {
    if (value !== null) {
      return JSON.parse(value);
    }
  }

  return null;
};

export const removeFromLocalStorage = (key: StorageKey): void => {
  if (!Object.keys(STORAGE_SCHEMA).some(storageKey => key === storageKey)) {
    throw new Error(`Undefined storage key ${key}. Define this key in STORAGE_KEYS and STORAGE_SCHEMA`);
  }

  localStorage.removeItem(key);
};

export const clearLocalStorage = (): void => {
  localStorage.clear();
};

export const setSessionStorage = (key: StorageKey, value: any): void => {
  if (!Object.keys(STORAGE_SCHEMA).some(storageKey => key === storageKey)) {
    throw new Error(`Undefined storage key ${key}. Define this key in STORAGE_KEYS and STORAGE_SCHEMA`);
  }

  const dataType: string = STORAGE_SCHEMA[key];

  if (typeof value === DATA_TYPES.OBJECT) {
    if (value instanceof Array && dataType !== DATA_TYPES.ARRAY) {
      throw new Error(`Incorrect value type. Array was expected.`);
    }
    if (value instanceof Object && !(value instanceof Array) && dataType !== DATA_TYPES.OBJECT) {
      throw new Error(`Incorrect value type. Object was expected.`);
    }
  } else if (typeof value !== dataType) {
    throw new Error(`Incorrect value type. ${dataType} was expected, ${typeof value} was provided.`);
  }
  
  if (typeof value === DATA_TYPES.OBJECT) {
    sessionStorage.setItem(key, JSON.stringify(value));
  } else {
    sessionStorage.setItem(key, value);
  }
};

export const getSessionStorage = (key: StorageKey): any => {
  if (!Object.keys(STORAGE_SCHEMA).some(storageKey => key === storageKey)) {
    throw new Error(`Undefined storage key ${key}. Define this key in STORAGE_KEYS and STORAGE_SCHEMA`);
  }

  const dataType: string = STORAGE_SCHEMA[key];
  const value: string | null = localStorage.getItem(key);

  if (dataType === DATA_TYPES.STRING) {
    return value;
  } else {
    if (value !== null) {
      return JSON.parse(value);
    }
  }

  return null;
};

export const removeFromSessionStorage = (key: StorageKey): void => {
  if (!Object.keys(STORAGE_SCHEMA).some(storageKey => key === storageKey)) {
    throw new Error(`Undefined storage key ${key}. Define this key in STORAGE_KEYS and STORAGE_SCHEMA`);
  }

  sessionStorage.removeItem(key);
};

export const clearSessionStorage = (): void => {
  sessionStorage.clear();
};