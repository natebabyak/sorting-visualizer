import { Complexity } from './complexity';

/**
 * The time complexity of an algorithm.
 */
export interface TimeComplexity {
  /**
   * The best-case time complexity of an algorithm.
   */
  best: Complexity;

  /**
   * The average-case time complexity of an algorithm.
   */
  average: Complexity;

  /**
   * The worst-case time complexity of an algorithm.
   */
  worst: Complexity;
}
