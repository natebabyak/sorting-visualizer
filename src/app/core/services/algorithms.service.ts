import { inject, Injectable } from '@angular/core';
import { DelayService } from './delay.service';
import { Algorithm } from '../models/algorithm';
import { Complexity } from '../models/complexity';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmsService {
  /**
   * The delay service.
   */
  public delayService: DelayService;

  /**
   * Initializes the delay service.
   */
  constructor() {
    this.delayService = inject(DelayService);
  }

  /**
   * The list of all algorithms.
   */
  private algorithms: Algorithm[] = [
    {
      id: 'bubble-sort',
      name: 'Bubble Sort',
      timeComplexity: {
        best: Complexity.Linear,
        average: Complexity.Quadratic,
        worst: Complexity.Quadratic
      },
      spaceComplexity: Complexity.Constant,
      stability: 'stable',
      placement: 'inPlace',
      sort: (numbers: number[]): void => {
        const n = numbers.length;
        for (let i = 0; i < n - 1; i++) {
          let swapped = false;
          for (let j = 0; j < n - i - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
              [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
              this.delayService
              swapped = true;
            }
          }
          if (!swapped) break;
        }
      }
    },
    {
      id: 'heapsort',
      name: 'Heapsort',
      timeComplexity: {
        best: Complexity.Linearithmic,
        average: Complexity.Linearithmic,
        worst: Complexity.Linearithmic
      },
      spaceComplexity: Complexity.Constant,
      stability: 'unstable',
      placement: 'inPlace',
      sort(arr: number[]): void {
        function heapify(arr: number[], n: number, i: number) {
          let maxIndex = i;

          const leftIndex = 2 * i + 1;
          const rightIndex = 2 * i + 2;

          if (leftIndex < n && arr[leftIndex] > arr[maxIndex]) maxIndex = leftIndex;
          if (rightIndex < n && arr[rightIndex] > arr[maxIndex]) maxIndex = rightIndex;

          if (maxIndex !== i) {
            [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
            heapify(arr, n, maxIndex);
          }
        }

        function heapsort(arr: number[]) {
          const n = arr.length;
          for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i);
          for (let i = n - 1; i > 0; i--) {
            [arr[0], arr[i]] = [arr[i], arr[0]];
            heapify(arr, i, 0);
          }
        }

        heapsort(arr);
      }
    },
    {
      id: 'insertion-sort',
      name: 'Insertion Sort',
      timeComplexity: {
        best: Complexity.Linear,
        average: Complexity.Quadratic,
        worst: Complexity.Quadratic
      },
      spaceComplexity: Complexity.Constant,
      stability: 'stable',
      placement: 'inPlace',
      sort(arr: number[]): void {
        for (let i = 1; i < arr.length; i++) {
          const key = arr[i];
          let j = i - 1;
          while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
          }
          arr[j + 1] = key;
        }
      }
    },
    {
      id: 'merge-sort',
      name: 'Merge Sort',
      timeComplexity: {
        best: Complexity.Linearithmic,
        average: Complexity.Linearithmic,
        worst: Complexity.Linearithmic
      },
      spaceComplexity: Complexity.Linear,
      stability: 'stable',
      placement: 'inPlace',
      sort(arr: number[]): void {
        function merge(arr: number[], left: number, mid: number, right: number) {
          const leftN = mid - left + 1;
          const rightN = right - mid;

          const leftArr = new Array(leftN);
          const rightArr = new Array(rightN);

          for (let i = 0; i < leftN; i++) leftArr[i] = arr[left + i];
          for (let i = 0; i < rightN; i++) rightArr[i] = arr[mid + i + 1];

          let i = 0, j = 0, k = left;

          while (i < leftN && j < rightN) {
            if (leftArr[i] <= rightArr[j]) {
              arr[k] = leftArr[i];
              i++;
            } else {
              arr[k] = rightArr[j];
              j++;
            }
            k++;
          }

          while (i < leftN) {
            arr[k] = leftArr[i];
            i++;
            k++;
          }

          while (j < rightN) {
            arr[k] = rightArr[j];
            j++;
            k++;
          }
        }

        function mergeSort(arr: number[], left: number, right: number) {
          if (left >= right) return;

          const mid = Math.floor(left + (right - left) / 2);
          mergeSort(arr, left, mid);
          mergeSort(arr, mid + 1, right);
          merge(arr, left, mid, right);
        }

        mergeSort(arr, 0, arr.length - 1);
      }
    },
    {
      id: 'quicksort',
      name: 'Quicksort',
      timeComplexity: {
        best: Complexity.Linearithmic,
        average: Complexity.Linearithmic,
        worst: Complexity.Quadratic
      },
      spaceComplexity: Complexity.Constant,
      stability: 'unstable',
      placement: 'outOfPlace',
      sort(arr: number[]): void {
        function partition(arr: number[], low: number, high: number) {
          const pivot = arr[high];
          let i = low - 1;
          for (let j = low; j < high - 1; j++) {
            if (arr[j] < pivot) {
              i++;
              [arr[i], arr[j]] = [arr[j], arr[i]];
            }
          }
          [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
          return i + 1;
        }

        function quicksort(arr: number[], low: number, high: number) {
          if (low < high) {
            const pivotIndex = partition(arr, low, high);
            quicksort(arr, low, pivotIndex - 1);
            quicksort(arr, pivotIndex + 1, high);
          }
        }

        quicksort(arr, 0, arr.length - 1);
      }
    },
    {
      id: 'selection-sort',
      name: 'Selection Sort',
      timeComplexity: {
        best: Complexity.Quadratic,
        average: Complexity.Quadratic,
        worst: Complexity.Quadratic
      },
      spaceComplexity: Complexity.Constant,
      stability: 'unstable',
      placement: 'inPlace',
      sort(arr: number[]): void {
        const n = arr.length;
        for (let i = 0; i < n - 1; i++) {
          let min = i;
          for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
              min = j;
            }
          }
          [arr[i], arr[min]] = [arr[min], arr[i]];
        }
      }
    }
  ];

  /**
   * Gets the algorithm with the given ID.
   * @param id The ID of the algorithm to get.
   * @returns The algorithm with the given ID.
   */
  public getAlgorithm(id: string): Algorithm | undefined {
    return this.algorithms.find((algorithm) => algorithm.id === id);
  }

  /**
   * Gets the list of all algorithms.
   * @returns The list of all algorithms.
   */
  public getAlgorithms(): Algorithm[] {
    return this.algorithms;
  }
}
