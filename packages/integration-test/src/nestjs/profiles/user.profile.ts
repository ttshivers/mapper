import type { Mapper, MappingProfile } from '@ttshivers/automapper-core';
import { AutomapperProfile, InjectMapper } from '@ttshivers/automapper-nestjs';
import { Injectable } from '@nestjs/common';
import { userProfile } from '../../classes/profiles/user.profile';

@Injectable()
export class UserProfile extends AutomapperProfile {
    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }

    override get profile(): MappingProfile {
        return userProfile;
    }
}
