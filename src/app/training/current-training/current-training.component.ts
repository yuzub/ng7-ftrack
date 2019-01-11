import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { StopTrainingComponent } from './stop-training.component';

@Component({
  selector: 'ft-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  timerId;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.timerId = setInterval(() => {
      if (this.progress >= 100) {
        clearInterval(this.timerId);
      } else {
        this.progress += 5;
      }
    }, 1000);
  }

  onStop() {
    clearInterval(this.timerId);
    this.dialog.open(StopTrainingComponent);
  }
}
