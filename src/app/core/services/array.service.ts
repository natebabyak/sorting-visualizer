import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {
  /**
   * Shuffles an array.
   * @param arr The array to shuffle.
   */
  public shuffle(arr: number[]): void {
    for (let i = arr.length - 1; i > 0; i--) {
      const r = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[r]] = [arr[r], arr[i]];
    }
  }

  /**
   * Creates and shuffles an array of numbers from 1 to n.
   * @param n The length of the array.
   * @returns The newly created array.
   */
  public create(n: number): number[] {
    const arr: number[] = new Array(n);
    for (let i = 0; i < n; i++) {
      arr[i] = i + 1;
    }
    this.shuffle(arr);
    return arr;
  }

  /**
   * Nearly sorts an array.
   * @param arr The array.
   */
  public nearlySort(arr: number[]): void {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      arr[i] = i + 1;
    }
    const i = Math.floor(n / 2);
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }

  /**
   * Sorts an array in descending order.
   * @param arr The array.
   */
  public sortDescending(arr: number[]): void {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      arr[i] = n - i;
    }
  }
}
