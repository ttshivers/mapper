import type { Mapper, MappingProfile } from '@ttshivers/automapper-core';
import {
    createMap,
    forMember,
    mapFrom,
    mapWith,
} from '@ttshivers/automapper-core';
import { AutomapperProfile, InjectMapper } from '@ttshivers/automapper-nestjs';
import { Injectable } from '@nestjs/common';
import { Bar, BarDto, Foo, FooDto } from './foo';

@Injectable()
export class FooProfile extends AutomapperProfile {
    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }

    override get profile(): MappingProfile {
        return (mapper) => {
            createMap(
                mapper,
                Bar,
                BarDto,
                forMember(
                    (d) => d.barDto,
                    mapFrom((s) => s.bar)
                )
            );

            createMap(
                mapper,
                Foo,
                FooDto,
                forMember(
                    (d) => d.fooDto,
                    mapFrom((s) => s.foo)
                ),
                forMember(
                    (d) => d.barDto,
                    mapWith(BarDto, Bar, (s) => s.bar)
                )
            );
        };
    }
}
