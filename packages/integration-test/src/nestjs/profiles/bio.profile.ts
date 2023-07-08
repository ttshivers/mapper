import type { Mapper, MappingProfile } from '@ttshivers/automapper-core';
import { AutomapperProfile, InjectMapper } from '@ttshivers/automapper-nestjs';
import { Injectable } from '@nestjs/common';
import { bioProfile } from '../../classes/profiles/bio.profile';

@Injectable()
export class BioProfile extends AutomapperProfile {
    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }

    override get profile(): MappingProfile {
        return bioProfile;
    }
}
