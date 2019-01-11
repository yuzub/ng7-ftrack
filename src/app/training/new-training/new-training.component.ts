import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ft-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {
  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  @Output() trainingStart = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onStartTraining() {
    this.trainingStart.emit();
  }

}
