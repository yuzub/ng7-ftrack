import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ft-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output() closeSadnav = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.closeSadnav.emit();
  }

}
