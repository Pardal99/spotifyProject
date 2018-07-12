import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageService extends Storage {
  constructor() { super(null); }

  public setItems(items: any[]) {
    return Promise.all(items).then((values) => {
      values.map((item) => {
        this.set(item.key, item.value);
      });

      return;
    });
  }

  public getItems(keys: string[]) {
    const promises = [];

    keys.forEach((key) => promises.push(this.get(key)));

    return Promise.all(promises).then((values) => {
      const result = {};
      values.map((value, index) => {
        result[keys[index]] = value;
      });
      return result;
    });
  }

  public removeItems(keys: string[]) {
    return Promise.all(keys).then((values) => {
      values.map((value, index) => {
        this.remove(value);
      });

      return;
    });
  }
}
