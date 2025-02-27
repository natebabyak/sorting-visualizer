import { Component } from '@angular/core';
import { Algorithm } from '../../core/models/algorithm';
import { ActivatedRoute } from '@angular/router';
import { AlgorithmsService } from '../../core/services/algorithms.service';
import { VisualizerComponent } from "../../shared/components/visualizer/visualizer.component";

@Component({
  selector: 'app-algorithm',
  standalone: true,
  imports: [VisualizerComponent],
  templateUrl: './algorithm.component.html',
  styleUrl: './algorithm.component.css'
})
export class AlgorithmComponent {
  protected algorithm?: Algorithm;

  constructor(private route: ActivatedRoute, private algorithmsService: AlgorithmsService) {
    this.route.params.subscribe(params => {
      this.algorithm = this.algorithmsService.getAlgorithmById(params['id']);
    });
  }
}
