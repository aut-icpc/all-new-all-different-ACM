import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

export abstract class BaseHttpService {

  protected constructor(protected httpClient: HttpClient) { }

  public abstract sendPostRequest<T>(url: string, data: any,
                            options?: { headers?: HttpHeaders | { [header: string]: string | string[] };
                            params?: HttpParams | { [param: string]: string | string[] }}): Observable<T>


  public abstract sendGetRequest<T>(url: string,
                                    options?: { headers?: HttpHeaders | { [header: string]: string | string[] };
                                    params?: HttpParams | { [param: string]: string | string[] }}): Observable<T>

  public abstract sendPutRequest<T>(url: string, data: any,
                           options?: { headers?: HttpHeaders | { [header: string]: string | string[] };
                           params?: HttpParams | { [param: string]: string | string[] }}): Observable<T>
}
