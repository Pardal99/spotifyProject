import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  get(endpoint: string, params?: any) {
    return this.http.get(endpoint, params);
  }

  post(endpoint: string, body?: any, params?: any, headers?: any) {
    return this.http.post(endpoint, body,
      {
        params: this.buildParams(params),
        headers
      });
  }

  put(endpoint: string, body: any, params?: any) {
    return this.http.put(endpoint, body,
      { params: this.buildParams(params) });
  }

  delete(endpoint: string, params?: any) {
    return this.http.delete(endpoint,
      { params: this.buildParams(params) });
  }

  patch(endpoint: string, body: any, params?: any) {
    return this.http.put(endpoint, body,
      { params: this.buildParams(params) });
  }

  private buildParams(params) {
    let httpParams = new HttpParams();

    if (params) {
      for (const param of Object.keys(params)) {
        httpParams = httpParams.set(param, params[param]);
      }
    }

    return httpParams;
  }
}
