import { TimeComplexity } from './time-complexity';
import { Complexity } from './complexity';
import { Stability } from './stability';
import { Placement } from './placement';

/**
 * A sorting algorithm.
 */
export interface Algorithm {
  /**
   * The unique identifier of the algorithm.
   */
  id: string;

  /**
   * The name of the algorithm.
   *
   * e.g. Bubble Sort
   */
  name: string;

  /**
   * The time complexity of the algorithm in big O notation.
   */
  timeComplexity: TimeComplexity;

  /**
   * The space complexity of the algorithm in big O notation.
   */
  spaceComplexity: Complexity;

  /**
   * Whether the algorithm is stable or unstable.
   */
  stability: Stability;

  /**
   * Whether the algorithm is in-place or out-of-place.
   */
  placement: Placement;

  /**
   * Sorts an array of numbers.
   * @param numbers The array of numbers.
   */
  sort: (numbers: number[]) => void;
}
