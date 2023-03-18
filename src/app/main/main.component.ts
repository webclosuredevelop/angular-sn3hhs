import { Component } from '@angular/core';
import { SampleService } from './services/sample.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private service: SampleService) {

  }
}
