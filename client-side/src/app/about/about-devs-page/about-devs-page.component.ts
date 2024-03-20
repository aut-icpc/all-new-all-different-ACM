import {Component, OnInit} from '@angular/core';
import {Developer} from "../../shared/interfaces/developer";

@Component({
  selector: 'acpc-about-devs-page',
  templateUrl: './about-devs-page.component.html',
  styleUrls: ['./about-devs-page.component.scss']
})
export class AboutDevsPageComponent implements OnInit {
  developersList!: Developer[];

  ngOnInit(): void {
    this.developersList = [
      {
        name: 'Mohammad-hossein Zeynalzadeh',
        profileImage: 'assets/images/devs-profiles/mhzz.png',
        role: 'Frontend',
        email: 'mh.zeynal@gmail.com',
        telegramUrl: 'https://t.me/mhzz_74'
      },
      {
        name: 'Farid Masjedi',
        profileImage: 'assets/images/devs-profiles/farid-masjedi.png',
        role: 'Backend',
        email: 'blue.farid.masjedi@gmail.com',
        telegramUrl: 'https://t.me/blue_farid'
      },
      {
        name: 'Alireza Yousefpour',
        profileImage: 'assets/images/devs-profiles/alireza-yousefpour.png',
        role: 'Frontend',
        email: 'alireza.yousefpourm@gmail.com',
        telegramUrl: 'https://t.me/AlirezaYousefpourM'
      },
      {
        name: 'Farhad Aman',
        profileImage: 'assets/images/devs-profiles/farhad-aman.png',
        role: 'Devops',
        email: 'farhadaman7780@gmail.com',
        telegramUrl: 'https://t.me/farhad771380'
      }
    ]
  }


}
