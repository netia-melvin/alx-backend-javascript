
/**
 * Tracks the number of calls made to an API's endpoint.
 * @param {{
 *   protocol: String,
 *   name: String,
 * }} endpoint - The endpoint to make a request to.
 * @author Melvin Netia <https://github.com/netia
 */

export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let called = weakMap.get(endpoint) || 0;

  called += 1;

  weakMap.set(endpoint, called);

  if (called >= 5) {
    throw Error('Endpoint load is high');
  }

  return called;
}
