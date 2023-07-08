import type { Constructor } from '@ttshivers/automapper-core';

export interface MappedType<T> extends Constructor<T> {
    new (): T;
}
