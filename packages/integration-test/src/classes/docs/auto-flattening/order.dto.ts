import { AutoMap } from '@ttshivers/automapper-classes';

export class OrderDto {
    @AutoMap()
    customerName!: string;
    @AutoMap()
    total!: number;
}
