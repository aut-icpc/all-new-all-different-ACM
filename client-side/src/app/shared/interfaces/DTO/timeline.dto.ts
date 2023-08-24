export class TimelineDto {
    id!: number;
    title!: string;
    date!: Date;
    description!: string;
    type!: 'REGISTRATION' | 'ORIENTATION' | 'CONTEST';
}
