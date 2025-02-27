import { TimeComplexity } from './time-complexity';
import { Complexity } from './complexity';

export interface Algorithm {
    id: string;
    name: string;
    timeComplexity: TimeComplexity;
    spaceComplexity: Complexity;
    isStable: boolean;
    isInPlace: boolean;
    sort(arr: number[]): void;
}
