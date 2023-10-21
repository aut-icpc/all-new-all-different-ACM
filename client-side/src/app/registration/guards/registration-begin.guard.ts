import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpService} from "../../shared/services/http.service";
import {BaseResponseDto} from "../../shared/interfaces/DTO/baseResponse.dto";
import {CountDownDto} from "../../shared/interfaces/DTO/countDown.dto";
import {API_URLS} from "../../shared/api-urls";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RegistrationBeginGuard  {

  constructor(private http: HttpService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isRegistrationBegun().pipe(map(isBegun => {
      if (isBegun)
        return true;
      return this.router.parseUrl('/registration/coming-soon');
    }
    ));
  }

  private isRegistrationBegun() {
    const params = {type: 'COMING_SOON'};
    return this.http.sendGetRequest<BaseResponseDto<CountDownDto>>(API_URLS.COUNTDOWN, { params: params })
      .pipe(
        map(response => {
          const date = new Date(response.result.date);
          const now = new Date();
          return date <= now;
        })
      );
  }

}
