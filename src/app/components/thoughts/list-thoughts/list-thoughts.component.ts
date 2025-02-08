import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css'],
})
export class ListThoughtsComponent implements OnInit {
  thoughtsList = [
    { conteudo: 'conteúdo teste 2', autoria: 'Rob', modelo: 'modelo3' },
    { conteudo: 'conteúdo teste 3', autoria: 'Rob', modelo: 'modelo2' },
    {
      conteudo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae placerat massa. Proin dictum placerat tortor at malesuada. Praesent rutrum vehicula augue, nec sodales nisl suscipit vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean accumsan vel quam vitae tempus. Vivamus ultricies vitae quam aliquet lobortis. Pellentesque metus diam, facilisis eu auctor at, dignissim in sem. Donec iaculis sodales finibus. Donec tristique ullamcorper velit eu vehicula. Aliquam eu ligula libero. Nam non commodo felis, quis sollicitudin magna. In blandit justo nisl, nec aliquet arcu placerat ullamcorper. Donec porttitor ligula quis massa placerat interdum pulvinar efficitur lectus. Aenean dapibus a enim ac commodo. Duis fermentum sapien ac augue auctor varius.',
      autoria: 'Rob',
      modelo: 'modelo1',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
