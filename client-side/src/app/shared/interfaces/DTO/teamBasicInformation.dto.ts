import {TeamStatus} from "../../enums/team-status";

export class TeamBasicInformationDto {
  id!: number;
  teamName!: string;
  status!: TeamStatus;
  institution!: string;
}
