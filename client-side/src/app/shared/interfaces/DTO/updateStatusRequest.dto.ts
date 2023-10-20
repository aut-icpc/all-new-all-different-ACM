import {TeamStatus} from "../../enums/team-status";

export class UpdateStatusRequestDto {
  teamId!: number;
  status!: TeamStatus;
  isInAmirkabir!: boolean;
}
