import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tarefas';
  bsInlineValue = new Date();
  projetoList = [
    { id: 1, descricao: 'Projeto BI', qtd_tarefas: 12, subtitulo: 'Construcao Bi Zorro'},
    { id: 2, descricao: 'Projeto BI 2', qtd_tarefas: 12, subtitulo: 'Construcao Bi Zorro'},
    { id: 3, descricao: 'Projeto BI 3', qtd_tarefas: 12, subtitulo: 'Construcao Bi Zorro'}
  ];
  tarefaList = [
    { idProjeto: 1, fase: 'NEWREQUEST', id: 1, descricao: 'Tarefa 1', data: "2020-09-23T18:25:43.511Z" , dias: 12 },
    { idProjeto: 1, fase: 'NEWREQUEST', id: 2, descricao: 'Tarefa 2', data: "2020-09-23T18:25:43.511Z" , dias: 12 },
    { idProjeto: 2, fase: 'NEWREQUEST', id: 3, descricao: 'Tarefa 3', data: "2020-09-23T18:25:43.511Z" , dias: 12 },
    { idProjeto: 2, fase: 'NEWREQUEST', id: 4, descricao: 'Tarefa 4', data: "2020-09-23T18:25:43.511Z" , dias: 12 },
    { idProjeto: 3, fase: 'NEWREQUEST', id: 5, descricao: 'Tarefa 5', data: "2020-09-23T18:25:43.511Z" , dias: 12 },
    { idProjeto: 3, fase: 'NEWREQUEST', id: 6, descricao: 'Tarefa 6', data: "2020-09-23T18:25:43.511Z" , dias: 12 },
    { idProjeto: 2, fase: 'NEWREQUEST', id: 7, descricao: 'Tarefa 7', data: "2020-09-23T18:25:43.511Z" , dias: 12 },
  ];


 
}
