import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tarefas';
  projetoList = [
    { id: 1, descricao: 'Projeto BI', qtd_tarefas: 12, subtitulo: 'Construcao Bi Zorro'},
    { id: 2, descricao: 'Projeto BI 2', qtd_tarefas: 12, subtitulo: 'Construcao Bi Zorro'},
    { id: 3, descricao: 'Projeto BI 3', qtd_tarefas: 12, subtitulo: 'Construcao Bi Zorro'}
  ];
 
}
