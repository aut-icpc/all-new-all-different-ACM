import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpService} from "../../shared/services/http.service";
import {API_URLS} from "../../shared/api-urls";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'acpc-zify-callback-page',
  templateUrl: './zify-callback-page.component.html',
  styleUrls: ['./zify-callback-page.component.scss']
})
export class ZifyCallbackPageComponent {
  successful!: boolean
  loaded: boolean = false

  clientRefId!: number;

  constructor(private router: Router,
              private http: HttpService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.successful = new Date().getSeconds() % 4 < 2

    this.route.queryParams.subscribe(params => {
      this.clientRefId = params['clientrefid'];
    });

    this.http.sendGetRequest<HttpResponse<string>>(`${API_URLS.PAYMENT}/${this.clientRefId}`).subscribe(
      response => {
        this.loaded = true;
        this.successful = true;
      },
    (error:HttpErrorResponse) => {
      this.loaded = true;
      this.successful = error.status == 200;
      }
    );

  }

  navigateToHome() {
    this.navigateToPage('home')
  }

  private navigateToPage(uri: string) {
    let formatted = this.formatName(uri);
    formatted = '/' + formatted;
    if (formatted.includes('register') || formatted.includes('reg'))
      formatted = '/registration' + formatted;
    this.router.navigateByUrl(formatted);
  }

  private formatName(name: string): string {
    let formatted = name.replace('.', '');
    return formatted.replace(' ', '-').toLowerCase();
  }

}
