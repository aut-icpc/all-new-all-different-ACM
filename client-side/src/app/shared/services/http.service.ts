import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {BaseHttpService} from "./base-http-service";

@Injectable({
  providedIn: 'root'
})
export class HttpService extends BaseHttpService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  public sendPostRequest<T>(url: string, data: any,
                            options?: { headers?: HttpHeaders | { [header: string]: string | string[] }; params?: HttpParams | { [param: string]: string | string[] }}): Observable<T> {
    return this.httpClient.post<T>(url, data, options);
  }


  public sendGetRequest<T>(url: string, options?: { headers?: HttpHeaders | { [header: string]: string | string[] }; params?: HttpParams | { [param: string]: string | string[] }}): Observable<T> {
    return this.httpClient.get<T>(url, options);
  }

  public sendPutRequest<T>(url: string, data: any,
                            options?: { headers?: HttpHeaders | { [header: string]: string | string[] }; params?: HttpParams | { [param: string]: string | string[] }}): Observable<T> {
    return this.httpClient.put<T>(url, data, options);
  }
}
