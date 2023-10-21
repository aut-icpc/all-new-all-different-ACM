import {Injectable} from '@angular/core';
import {BaseHttpService} from "../../shared/services/base-http-service";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {HttpService} from "../../shared/services/http.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedHttpService extends BaseHttpService {

  constructor(private http: HttpService, httpClient: HttpClient) {
    super(httpClient);
  }

  sendGetRequest<T>(url: string,
                    options?: { headers?: HttpHeaders | { [p: string]: string | string[] };
                    params?: HttpParams | { [p: string]: string | string[] } }): Observable<T> {
    return this.http.sendGetRequest(url, this.appendAuthenticationHeader(options));
  }

  sendPostRequest<T>(url: string, data: any,
                     options?: { headers?: HttpHeaders | { [p: string]: string | string[] };
                     params?: HttpParams | { [p: string]: string | string[] } }): Observable<T> {
    return this.http.sendPostRequest(url, data, this.appendAuthenticationHeader(options));
  }

  sendPutRequest<T>(url: string, data: any,
                    options?: { headers?: HttpHeaders | { [p: string]: string | string[] };
                    params?: HttpParams | { [p: string]: string | string[] } }): Observable<T> {
    return this.http.sendPutRequest(url, data, this.appendAuthenticationHeader(options));
  }

  private appendAuthenticationHeader(options?: { headers?: HttpHeaders | { [p: string]: string | string[] };
    params?: HttpParams | { [p: string]: string | string[] } }) {
    if (!options) {
      options = {};
    }

    if (!options.headers) {
      options.headers = {};
    }

    const token = localStorage.getItem('token') || '';
    const headers = options.headers;
    const newHeaders = {
      ...headers,
      Authorization: `Bearer ${token}`
    };
    return {
      ...options,
      headers: newHeaders
    };
  }
}
