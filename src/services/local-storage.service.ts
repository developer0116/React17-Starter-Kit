class LocalStorage {
  store = window.localStorage;
  constructor() {}
  getItem<T>(key: string): T | null {
    let item = this.store.getItem(key);

    return item ? JSON.parse(JSON.stringify(item)) : null;
  }
  saveItem(key: string, data: any): void {
    this.store.setItem(key, JSON.stringify(data));
  }
  deleteItem(key: string): void {
    this.store.removeItem(key);
  }
}
export default new LocalStorage();
