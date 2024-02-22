import { Component } from '@angular/core';
import { WikipediaService } from './Services/wikiServer/wikipedia.service';

@Component({
  selector: 'app-f008',
  templateUrl: './f008.component.html',
  styleUrl: './f008.component.scss'
})
export class F008Component {
  resultados: any[] = [];
  termo: string = '';
  constructor(private wiki: WikipediaService) { }

  onPesquisa(termo: string):void {
    this.termo = termo;
    this.wiki.pesquisar(termo).subscribe(data => this.resultados = data.query.search);
  }
}
