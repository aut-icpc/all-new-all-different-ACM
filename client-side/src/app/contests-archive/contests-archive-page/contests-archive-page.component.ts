import {Component, OnInit} from '@angular/core';
import {ArchiveDto} from "../../shared/interfaces/DTO/archive.dto";
import {HttpService} from "../../shared/services/http.service";
import {BaseResponseDto} from "../../shared/interfaces/DTO/baseResponse.dto";
import {API_URLS} from "../../shared/api-urls";

@Component({
  selector: 'acpc-contests-archive-page',
  templateUrl: './contests-archive-page.component.html',
  styleUrls: ['./contests-archive-page.component.scss']
})
export class ContestsArchivePageComponent implements OnInit {

  archives!: ArchiveDto[];

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.sendGetRequest<BaseResponseDto<ArchiveDto[]>>(API_URLS.ARCHIVE)
      .subscribe(response => {
        this.archives = response.result.map((archiveDto: ArchiveDto) => {
          return { ...archiveDto, date: new Date(archiveDto.date) };
        });
      })
  }

}
