import { classes } from '@ttshivers/automapper-classes';
import type { Mapper } from '@ttshivers/automapper-core';
import { createMapper } from '@ttshivers/automapper-core';
import { getMapperToken } from '@ttshivers/automapper-nestjs';
import { Test } from '@nestjs/testing';
import { Bar, Foo, FooDto } from './foo';
import { FooProfile } from './foo.profile';

describe('fooProfile', () => {
    let mapper: Mapper;
    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            providers: [
                {
                    provide: getMapperToken(),
                    useValue: createMapper({
                        strategyInitializer: classes(),
                    }),
                },
                FooProfile,
            ],
        }).compile();
        mapper = moduleRef.get<Mapper>(getMapperToken());
    });

    it('should map', () => {
        const foo = new Foo();
        foo.foo = 'foo';
        foo.bar = new Bar();
        foo.bar.bar = 'bar';

        const dto = mapper.map(foo, Foo, FooDto);
        expect(dto.fooDto).toEqual(foo.foo);
        expect(dto.barDto.barDto).toEqual(foo.bar.bar);
    });
});
