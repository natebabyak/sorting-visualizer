import { Injectable } from '@angular/core';
import { ArraySort } from '../models/array-sort';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {
  /**
   * Creates an array.
   * @param n The number of elements in the array.
   * @param sort The sort of the array (ascending, random, descending).
   * @returns The array.
   */
  public create(n: number, type: ArraySort): number[] {
    let arr: number[] = [];
    for (let i = 0; i < n; i++) {
      arr.push(type === 'ascending' ? i + 1 : n - i);
    }
    if (type === 'random') {
      this.shuffle(arr);
    }
    return arr;
  }

  /**
   * Shuffles an array.
   * @param arr The array to shuffle.
   */
  public shuffle(arr: number[]): void {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
}
