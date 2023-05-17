import {Contestant} from "../contestant";

export class TeamDto {
  id !: number;
  teamName !: string;
  institution !: string;
  contestants !: Contestant[];
}
