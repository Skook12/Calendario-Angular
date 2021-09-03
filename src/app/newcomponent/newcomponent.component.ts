import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcomponent',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.scss']
})
export class NewcomponentComponent implements OnInit {
  @Input("projeto") _projeto: any;
  constructor() { }

  ngOnInit(): void {
  }

}
