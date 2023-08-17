import {Point} from "leaflet";

export class ContactUsDto {
  id!: number;
  instagram!: string;
  telegram!: string;
  email!: string;
  phoneNumber!: string;
  universityCoordinate!: Point;
}
