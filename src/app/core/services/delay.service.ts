import { Injectable } from '@angular/core';

const DEFAULT_DELAY = 50;

@Injectable({
  providedIn: 'root'
})

export class DelayService {
  /**
   * The delay between each step of a sorting animation, in milliseconds.
   */
  private delay: number = DEFAULT_DELAY;

  /**
   * Sets the delay.
   * @param delay The delay.
   */
  public setDelay(delay: number) {
    this.delay = delay;
  }

  /**
   * Pauses execution for the duration of the current delay.
   * @returns A promise that resolves after the delay has elapsed.
   */
  public sleep(): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, this.delay));
  }
}
