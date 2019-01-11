import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ft-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  welcomes = [
    {
      h: 'Header 1',
      t: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Impedit vero reprehenderit ipsam aliquid beatae nisi iure recusandae dolores.`
    },
    {
      h: 'Header 2',
      t: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Impedit vero reprehenderit ipsam aliquid beatae nisi iure recusandae dolores.`
    },
    {
      h: 'Header 3',
      t: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Impedit vero reprehenderit ipsam aliquid beatae nisi iure recusandae dolores.`
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
