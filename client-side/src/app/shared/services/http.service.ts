import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  public sendPostRequest<T>(url: string, data: any,
                            options?: { headers?: HttpHeaders | { [header: string]: string | string[] }; params?: HttpParams | { [param: string]: string | string[] }}): Observable<T> {
    return this.httpClient.post<T>(url, data, options);
  }


  public sendGetRequest<T>(url: string, options?: { headers?: HttpHeaders | { [header: string]: string | string[] }; params?: HttpParams | { [param: string]: string | string[] }}): Observable<T> {
    return this.httpClient.get<T>(url, options);
  }
}
