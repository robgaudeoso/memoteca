import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css'],
})
export class ThoughtComponent implements OnInit {
  @Input() pensamento = {
    conteudo: 'conteúdo teste',
    autoria: 'Rob',
    modelo: 'modelo3',
  };

  constructor() {}

  ngOnInit(): void {}

  ThoughtWidth(): string {
    if (this.pensamento.conteudo.length > 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
