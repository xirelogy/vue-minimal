import { VNode } from './VNode';

type IfAny<T, Y, N> = 0 extends 1 & T ? Y : N;


/**
 * Suppose to be compatible to vue's Slot
 */
export type Slot<T extends any = any> = (...args: IfAny<T, any[], [T] | (T extends undefined ? [] : never)>) => VNode[];