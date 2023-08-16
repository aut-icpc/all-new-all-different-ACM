import {FileDto} from "./file.dto";
import {PictureDto} from "./picture.dto";

export class ArchiveDto {
  id!: number;
  date!: Date;
  questions!: FileDto;
  rankings!: FileDto;
  eventDayPictures!: PictureDto[];
  poster!: PictureDto;
}
