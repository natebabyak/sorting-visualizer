import { Injectable } from '@angular/core';
import { Algorithm } from '../models/algorithm';
import { Complexity } from '../models/complexity';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmsService {
  private algorithms: Algorithm[] = [
    {
      id: 'bubble-sort',
      name: 'Bubble Sort',
      timeComplexity: {
        best: 'linear',
        average: 'quadratic',
        worst: 'quadratic'
      },
      spaceComplexity: 'constant',
      isStable: true,
      isInPlace: true,
      sort(arr: number[]): void {
        const n = arr.length;
        for (let i = 0; i < n - 1; i++) {
          let swapped = false;
          for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
              swapped = true;
            }
          }
          if (!swapped) {
            break;
          }
        }
      }
    },
    {
      id: 'insertion-sort',
      name: 'Insertion Sort',
      timeComplexity: {
        best: 'linear',
        average: 'quadratic',
        worst: 'quadratic'
      },
      spaceComplexity: 'constant',
      isStable: true,
      isInPlace: true,
      sort(arr: number[]): void {
        for (let i = 1; i < arr.length; i++) {
          let k = arr[i];
          let j = i - 1;
          while (j >= 0 && arr[j] > k) {
            arr[j + 1] = arr[j];
            j = j - 1;
          }
          arr[j + 1] = k;
        }
      }
    },
    {
      id: 'quicksort',
      name: 'Quicksort',
      timeComplexity: {
        best: 'linearithmic',
        average: 'linearithmic',
        worst: 'quadratic'
      },
      spaceComplexity: 'logarithmic',
      isStable: false,
      isInPlace: true,
      sort(arr: number[]): void {
        function quicksort(arr: number[], low: number = 0, high: number = arr.length - 1) {
          if (low < high) {
            const pivotIndex = partition(arr, low, high);
            quicksort(arr, low, pivotIndex - 1);
            quicksort(arr, pivotIndex + 1, high);
          }
        }

        function partition(arr: number[], low: number, high: number) {
          const pivot = arr[high];
          let i = low - 1;
          for (let j = low; j < high; j++) {
            if (arr[j] < pivot) {
              i++;
              [arr[i], arr[j]] = [arr[j], arr[i]];
            }
          }
          [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
          return i + 1;
        }
        
        quicksort(arr);
      }
    },
    {
      id: 'selection-sort',
      name: 'Selection Sort',
      timeComplexity: {
        best: 'quadratic',
        average: 'quadratic',
        worst: 'quadratic'
      },
      spaceComplexity: 'constant',
      isStable: false,
      isInPlace: true,
      sort(arr: number[]): void {
        const n = arr.length;
        for (let i = 0; i < n - 1; i++) {
          let m = i;
          for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[m]) {
              m = j;
            }
          }
          [arr[i], arr[m]] = [arr[m], arr[i]];
        }
      }
    }
  ];

  /**
   * Returns the algorithm with the given ID.
   * @param id The ID.
   * @returns The algorithm with the given ID.
   */
  public getAlgorithmById(id: string): Algorithm | undefined {
    return this.algorithms.find(algorithm => algorithm.id === id);
  }

  /**
   * Returns the list of all algorithms.
   * @returns The list of all algorithms.
   */
  public getAllAlgorithms(): Algorithm[] {
    return this.algorithms;
  }
}
