import {Contestant} from "../contestant";
import {TeamStatus} from "../../enums/team-status";

export class TeamDto {
  id !: number;
  teamName !: string;
  institution !: string;
  status!: TeamStatus;
  contestants !: Contestant[];
}
