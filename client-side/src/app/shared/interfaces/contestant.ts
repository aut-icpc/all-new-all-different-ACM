import {GraduationLevelDto} from "./DTO/graduationLevel.dto";
import {ShirtSizeDto} from "./DTO/shirtSize.dto";
import {PictureDto} from "./DTO/picture.dto";

export class Contestant {
  id !: number;
  firstname !: string;
  lastname !: string;
  gender !: string;
  phoneNumber !: string;
  email !: string;
  graduationLevel !: GraduationLevelDto;
  shirtSize !: ShirtSizeDto;
  studentId !: number;
  nationalIdPicture!: PictureDto;
  studentCardPicture!: PictureDto;
  paid!: boolean;
}
