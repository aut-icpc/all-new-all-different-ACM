import {Component, OnInit} from '@angular/core';
import {TeamDto} from "../../shared/interfaces/DTO/team.dto";
import {Router} from "@angular/router";

@Component({
  selector: 'acpc-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  dataSource!: TeamDto[];
  displayedColumns = ['Row', 'Team name', 'Institution', 'Status'];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showTeamDetails(team: TeamDto) {
    const id = team.id;
    this.router.navigate(['/admin/team-details'], {queryParams: {id: id}});
  }

}
