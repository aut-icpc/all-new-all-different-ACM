import {Component, OnInit} from '@angular/core';
import {ArchiveDto} from "../../shared/interfaces/DTO/archive.dto";
import {HttpService} from "../../shared/services/http.service";
import {BaseResponseDto} from "../../shared/interfaces/DTO/baseResponse.dto";
import {API_URLS} from "../../shared/api-urls";
import {MetaService} from "../../shared/services/meta.service";

// @ts-ignore

@Component({
  selector: 'acpc-contests-archive-page',
  templateUrl: './contests-archive-page.component.html',
  styleUrls: ['./contests-archive-page.component.scss']
})
export class ContestsArchivePageComponent implements OnInit {

  archives!: ArchiveDto[];
  loaded: boolean = false
  nothingFound: boolean = false

  constructor(private http: HttpService, private meta: MetaService) { }

  ngOnInit(): void {
    this.http.sendGetRequest<BaseResponseDto<ArchiveDto[]>>(API_URLS.ARCHIVE)
      .subscribe(response => {
        this.loaded = true;
        this.archives = response.result.map((archiveDto: ArchiveDto) => {
          return {...archiveDto, date: new Date(archiveDto.date)};
        });

        this.updateNothingFound();
      });

    this.meta.setCustomMetaTag('description', 'Web page that holds Archived ACPC ' +
      'contests held in the previous years');
    this.meta.setCustomMetaTag('keywords', 'ACPC, ICPC, AUT, Amirkabir, Contest, Archive');
  }

  updateNothingFound() {
    this.nothingFound = this.loaded && this.archives?.length === 0
  }

}
