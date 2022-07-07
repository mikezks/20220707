import { Component, OnInit } from '@angular/core';
import { getMessage } from 'direct-dep';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  message = getMessage();

  constructor() { }

  ngOnInit(): void { }

}
