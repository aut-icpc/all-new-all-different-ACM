import {Component, OnInit} from '@angular/core';
import {TeamDto} from "../../shared/interfaces/DTO/team.dto";
import {Router} from "@angular/router";
import {API_URLS} from "../../shared/api-urls";
import {BaseResponseDto} from "../../shared/interfaces/DTO/baseResponse.dto";
import {Pagination} from "../../shared/interfaces/pagination";
import {AuthenticatedHttpService} from "../services/authenticated-http.service";
import {PageEvent} from "@angular/material/paginator";
import {TeamPageDto} from "../../shared/interfaces/DTO/teamPage.dto";

@Component({
  selector: 'acpc-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  pageIndex: number = 0;
  paginationData!: Pagination;

  teamPageData: TeamPageDto | undefined;
  displayedColumns = ['Row', 'Team name', 'Institution', 'Status', 'Actions'];

  constructor(private router: Router, private http: AuthenticatedHttpService) { }

  ngOnInit(): void {
    this.paginationData = new Pagination();
    this.paginationData.pageNumber = 0;
    this.paginationData.pageSize = 10;

    this.http.sendGetRequest<BaseResponseDto<TeamPageDto>>(API_URLS.REGISTRATION.TEAM_REGISTER,
      {params: this.getPaginationHttpParameters()})
      .subscribe(response => {
        this.teamPageData = response.result;
      });
  }

  showTeamDetails(team: TeamDto) {
    const id = team.id;
    this.router.navigate(['/admin/team-details', id]);
  }

  onPageChanged(event: PageEvent) {
    delete this.teamPageData;

    this.pageIndex = event.pageIndex;
    this.paginationData.pageSize = event.pageSize;
    this.paginationData.pageNumber = event.pageIndex;

    this.http.sendGetRequest<BaseResponseDto<TeamPageDto>>(API_URLS.REGISTRATION.TEAM_REGISTER,
      {params: this.getPaginationHttpParameters()})
      .subscribe(response => {
        this.teamPageData = response.result;
      });
  }

  private getPaginationHttpParameters() {
    return {
      page: `${this.paginationData.pageNumber}`,
      size: `${this.paginationData.pageSize}`
    }
  }
}
