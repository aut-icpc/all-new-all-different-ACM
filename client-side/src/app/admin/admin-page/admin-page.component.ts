import {Component, OnInit} from '@angular/core';
import {TeamDto} from "../../shared/interfaces/DTO/team.dto";
import {Router} from "@angular/router";
import {HttpService} from "../../shared/services/http.service";
import {API_URLS} from "../../shared/api-urls";
import {BaseResponseDto} from "../../shared/interfaces/DTO/baseResponse.dto";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'acpc-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  dataSource!: TeamDto[];
  displayedColumns = ['Row', 'Team name', 'Institution', 'Status', 'Actions'];

  constructor(private router: Router, private http: HttpService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    this.http.sendGetRequest<BaseResponseDto<TeamDto[]>>(API_URLS.REGISTRATION.TEAM_REGISTER, {headers: headers})
      .subscribe(response => {
        this.dataSource = response.result;
      })
  }

  showTeamDetails(team: TeamDto) {
    const id = team.id;
    this.router.navigate(['/admin/team-details', id]);
  }

}
