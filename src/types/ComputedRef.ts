/**
 * Suppose to be compatible to vue's ComputedRef
 */
export interface ComputedRef<T = any> {
  readonly value: T;
}