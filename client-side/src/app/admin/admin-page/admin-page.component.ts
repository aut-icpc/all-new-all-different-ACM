import {Component, OnInit} from '@angular/core';
import {TeamDto} from "../../shared/interfaces/DTO/team.dto";
import {Router} from "@angular/router";
import {API_URLS} from "../../shared/api-urls";
import {BaseResponseDto} from "../../shared/interfaces/DTO/baseResponse.dto";
import {Pagination} from "../../shared/interfaces/pagination";
import {AuthenticatedHttpService} from "../services/authenticated-http.service";

@Component({
  selector: 'acpc-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  paginationData!: Pagination;
  dataSource!: TeamDto[];
  displayedColumns = ['Row', 'Team name', 'Institution', 'Status', 'Actions'];

  constructor(private router: Router, private http: AuthenticatedHttpService) { }

  ngOnInit(): void {
    this.http.sendGetRequest<BaseResponseDto<TeamDto[]>>(API_URLS.REGISTRATION.TEAM_REGISTER)
      .subscribe(response => {
        this.dataSource = response.result;
      });

    this.paginationData = new Pagination();
  }

  showTeamDetails(team: TeamDto) {
    const id = team.id;
    this.router.navigate(['/admin/team-details', id]);
  }

  onPageChanged($event: any) {
    console.log($event);
  }
}
