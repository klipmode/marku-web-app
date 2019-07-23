import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) {
  }

  addOrder(url: string, data: string, headers) {
    return this.http.post(url, data, headers);
  }
}
