import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.scss'
})
export class CarrinhoComponent {
  @Input() nomesVeiculos: string[] = [];
  exibirBotoesRodape: boolean = true;

  acaoBotao1() {
  }

  acaoBotao2() {
  }

  acaoBotao3() {
  }
}
