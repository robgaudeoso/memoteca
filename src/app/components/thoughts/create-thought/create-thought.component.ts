import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent implements OnInit {
  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1',
  };
  constructor() {}

  ngOnInit(): void {}

  createThought() {
    alert('Novo pensamento criado!');
  }

  cancelThought() {
    alert('Cancelado!');
  }
}
