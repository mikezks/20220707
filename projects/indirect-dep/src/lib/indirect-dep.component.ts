import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-indirect-dep',
  template: `
    <p>
      indirect-dep works!
    </p>
  `,
  styles: [
  ]
})
export class IndirectDepComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
