import {config} from '../config/config';
import {StoreI} from '../interfaces/Store';

export default class Data {
  private url: string = config.armcareServerUrl;

  public async getData(): Promise<{status: boolean; data: StoreI}> {
    try {
      const response = await fetch(this.url);
      const data = await response.json();

      if (data?.response) {
        return {status: true, data: data.response.stores};
      } else {
        return {status: false, data: {name: 'Network error'}};
      }
    } catch (e) {
      return {status: false, data: {name: 'Network error'}};
    }
  }
}
