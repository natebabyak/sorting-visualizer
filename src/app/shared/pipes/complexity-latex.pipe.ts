import { Pipe, PipeTransform } from '@angular/core';
import { Complexity } from '../../core/models/complexity';

@Pipe({
  name: 'complexityLatex'
})
export class ComplexityLatexPipe implements PipeTransform {
  /**
   * Transforms a complexity into its LaTeX representation.
   * @param complexity The complexity to transform.
   * @returns The LaTeX representation of the complexity.
   */
  public transform(complexity: Complexity): string {
    const complexityToLatex = {
      'constant': '1',
      'logarithmic': '\\log n',
      'linear': 'n',
      'linearithmic': 'n\\log n',
      'quadratic': 'n^2',
      'exponential': '2^n',
      'factorial': 'n!'
    }

    return `\\( O(${complexityToLatex[complexity]}) \\)`
  }
}
