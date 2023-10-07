import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
// @ts-ignore
import Swiper from 'swiper';
import {HttpService} from "../../shared/services/http.service";
import {BaseResponseDto} from "../../shared/interfaces/DTO/baseResponse.dto";
import {ArchiveDto} from "../../shared/interfaces/DTO/archive.dto";
import {API_URLS} from "../../shared/api-urls";
import {PictureDto} from "../../shared/interfaces/DTO/picture.dto";

@Component({
  selector: 'acpc-contest-details-page',
  templateUrl: './contest-details-page.component.html',
  styleUrls: ['./contest-details-page.component.scss']
})
export class ContestDetailsPageComponent implements OnInit {

  archiveId!: number;
  archive!: ArchiveDto;
  images!: string[];

  constructor(private route: ActivatedRoute, private http: HttpService) {
    this.route.queryParams.subscribe(params => {
        this.archiveId = params.id;
      }
    );
  }

  ngOnInit(): void {
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    this.http.sendGetRequest<BaseResponseDto<ArchiveDto>>(API_URLS.ARCHIVE + `/${this.archiveId}`)
      .subscribe(response => {
        this.archive = response.result;
        this.archive.date = new Date(this.archive.date);
        this.images =
          this.archive.eventDayPictures.map((pictureDto: PictureDto) => pictureDto.link);
      });
  }

}
