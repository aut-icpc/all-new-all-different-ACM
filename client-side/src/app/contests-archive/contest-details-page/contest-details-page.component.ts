import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
// @ts-ignore
import Swiper from 'swiper';
import {HttpService} from "../../shared/services/http.service";
import {BaseResponseDto} from "../../shared/interfaces/DTO/baseResponse.dto";
import {ArchiveDto} from "../../shared/interfaces/DTO/archive.dto";
import {API_URLS} from "../../shared/api-urls";
import {PictureDto} from "../../shared/interfaces/DTO/picture.dto";
import {MetaService} from "../../shared/services/meta.service";

@Component({
  selector: 'acpc-contest-details-page',
  templateUrl: './contest-details-page.component.html',
  styleUrls: ['./contest-details-page.component.scss']
})
export class ContestDetailsPageComponent implements OnInit {

  archiveId!: number;
  archive!: ArchiveDto;
  images!: string[];
  contentLoaded: boolean = false
  noPictureFound: boolean = false
  noRankingFound: boolean = false
  noQuestionsFound: boolean = false;


  constructor(private route: ActivatedRoute,
              private http: HttpService,
              private meta: MetaService) {
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
        this.contentLoaded = true
        this.archive = response.result;
        this.archive.date = new Date(this.archive.date);
        this.images =
          this.archive.eventDayPictures.map((pictureDto: PictureDto) => pictureDto.link);
        this.updateNoPictureFound()
        this.updateNoRankingFound()
        this.updateNoQuestionsFound()
      });

    this.meta.setPageIndexing("noindex");
  }

  updateNoPictureFound() {
    this.noPictureFound = this.contentLoaded && this.images.length === 0
  }

  updateNoRankingFound() {
    this.noRankingFound = this.contentLoaded && this.archive.rankings == null
  }

  updateNoQuestionsFound() {
    this.noQuestionsFound = this.contentLoaded && this.archive.questions == null
  }

}
