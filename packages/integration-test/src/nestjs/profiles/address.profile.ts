import type { Mapper, MappingProfile } from '@ttshivers/automapper-core';
import { AutomapperProfile, InjectMapper } from '@ttshivers/automapper-nestjs';
import { Injectable } from '@nestjs/common';
import { addressProfile } from '../../classes/profiles/address.profile';

@Injectable()
export class AddressProfile extends AutomapperProfile {
    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }

    override get profile(): MappingProfile {
        return addressProfile;
    }
}
