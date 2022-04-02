import { IStorage } from '@/utils/storage/storage.interface';

export default class StorageUtil implements IStorage {
  constructor(public key: string) {}

  set(value: string) {
    localStorage.setItem(this.key, value);
  }

  get() {
    return localStorage.getItem(this.key);
  }

  remove() {
    localStorage.removeItem(this.key);
  }
}
