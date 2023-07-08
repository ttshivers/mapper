import { AutoMap } from '@ttshivers/automapper-classes';

export class SimpleUserDto {
    @AutoMap()
    firstName!: string;
    @AutoMap()
    lastName!: string;
    @AutoMap()
    fullName!: string;
}
