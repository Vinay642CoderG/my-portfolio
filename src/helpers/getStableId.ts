import { nanoid } from "nanoid";

const idCache = new WeakMap<object, string>();

/**
 * Returns a stable unique ID for any given item or prefix.
 * Safe for use directly in JSX keys.
 *
 * @param item Object or string to base the ID on
 * @param prefix Optional prefix (useful for multiple lists)
 */
export function getStableId(item: object | string, prefix = "id"): string {
  // For primitive values (like string keys)
  if (typeof item !== "object" || item === null) {
    return `${prefix}-${String(item)}-${nanoid(6)}`;
  }

  // For objects (retain same ID between renders)
  if (!idCache.has(item)) {
    idCache.set(item, `${prefix}-${nanoid(10)}`);
  }
  return idCache.get(item)!;
}
