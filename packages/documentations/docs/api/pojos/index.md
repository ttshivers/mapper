---
id: "index"
title: "@ttshivers/automapper-pojos"
slug: "/api/pojos/"
sidebar_label: "README"
sidebar_position: 0
custom_edit_url: null
---

# @ttshivers/automapper-pojos

This is the official strategy from `@automapper` to work with Interfaces/Types along with Plain Objects

## Installation

```sh
npm i @ttshivers/automapper-pojos
```

or with `yarn`:

```sh
yarn add @ttshivers/automapper-pojos
```

#### `peerDependencies`

`@ttshivers/automapper-pojos` depends on `@ttshivers/automapper-core`

```sh
npm i @ttshivers/automapper-core
```

or with `yarn`:

```sh
yarn add @ttshivers/automapper-core
```

## Usage

`@ttshivers/automapper-pojos` provides `pojos` as a `MappingStrategyInitializer`. Pass `pojos()` to `createMapper` to create a `Mapper`
that uses `pojos` strategy.

```ts
import { pojos, PojosMetadataMap } from '@ttshivers/automapper-pojos';
import { createMapper, createMap, forMember, mapFrom } from '@ttshivers/automapper-core';

const mapper = createMapper({
  ...,
  strategyInitializer: pojos()
});

interface User {
    firstName: string;
    lastName: string;
}

interface UserDto {
    firstName: string;
    lastName: string;
    fullName: string;
}

PojosMetadataMap.create<User>('SomeTokenForUser', {
    firstName: String,
    lastName: String
});

PojosMetadataMap.create<UserDto>('SomeTokenForUserDto', {
  firstName: String,
  lastName: String,
  fullName: String
});

createMap<User, UserDto>(
    mapper,
    'SomeTokenForUser',
    'SomeTokenForUserDto',
    forMember(
        d => d.fullName,
        mapFrom(s => s.firstName + ' ' + s.lastName)
    )
);
mapper.map<User, UserDto>(
    {firstName: 'Auto', lastName: 'Mapper'},
    'SomeTokenForUser',
    'SomeTokenForUserDto'
);
// { firstName: 'Auto', lastName: 'Mapper', fullName: 'Auto Mapper' }
```

Read more about this strategy on [pojos documentation](https://automapperts.netlify.app/docs/plugins-system/introduce-to-pojos)
