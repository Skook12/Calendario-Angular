import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componenterefa',
  templateUrl: './componenterefa.component.html',
  styleUrls: ['./componenterefa.component.scss']
})
export class ComponenterefaComponent implements OnInit {

  @Input("tarefa") _tarefa: any;

  constructor() { }

  ngOnInit(): void {
  }

}
