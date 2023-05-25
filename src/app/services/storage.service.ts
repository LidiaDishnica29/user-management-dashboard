import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  setStorage(item: any, data: any) {
    return localStorage.setItem(item, data);
  }

  getStorage(item: any) {
    return localStorage.getItem(item);
  }

  removeStorage(item: any) {
    return localStorage.removeItem(item);
  }

  clearAll() {
    localStorage.clear();
  }
}
