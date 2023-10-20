import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'acpc-zify-callback-page',
  templateUrl: './zify-callback-page.component.html',
  styleUrls: ['./zify-callback-page.component.scss']
})
export class ZifyCallbackPageComponent {
  responseMessage!: any
  responseData!: any
  successful!: boolean
  loaded: boolean = false

  uiDataValues!: any
  uiDataKeys!: any

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.successful = new Date().getSeconds() % 4 < 2

    if (this.successful) {
      this.responseMessage = {}
      this.responseData = {
        amount: 1000,
        refid: "150039875879",
        card_number: "62198619****5728",
      }

      this.loaded = true
    } else {
      this.responseMessage = "{response message}"
      this.responseData = {}

      this.loaded = true
    }

    this.parseResult()

  }

  private parseResult() {
    const keyDict: any = {
      amount: "Amount",
      refid: "Reference ID",
      card_number: "Credit Card Number",
    }

    this.uiDataValues = []
    this.uiDataKeys = []

    if (this.successful) {
      for (let data of Object.keys(this.responseData)) {
        console.log("key is", data)
        this.uiDataValues.push(this.responseData[data])
        this.uiDataKeys.push(keyDict[data] ?? data)
      }
    }

    this.uiDataValues = [...this.uiDataValues]
    this.uiDataKeys = [...this.uiDataKeys]

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
