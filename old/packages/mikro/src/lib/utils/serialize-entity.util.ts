import type { AnyEntity } from '@mikro-orm/core';
import { Utils } from '@mikro-orm/core';

const excluded = [
  '__gettersDefined',
  '__entity',
  '__meta',
  '__platform',
  '__helper',
  '__factory',
];

export function serializeEntity(item: AnyEntity) {
  const result = {} as Record<string | symbol, unknown>;
  for (const key of Reflect.ownKeys(item)) {
    if (typeof key === 'symbol' || excluded.includes(key)) {
      continue;
    }

    const value = item[key as string];
    if (Utils.isCollection(value)) {
      result[key] = value.getSnapshot() || [];
    } else if (Utils.isEntity(value)) {
      result[key] = serializeEntity(value);
    } else {
      result[key] = value;
    }
  }

  if (result['id'] == null && item['id'] != null) {
    result['id'] = item['id'];
  }

  return result;
}