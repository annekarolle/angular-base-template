import { Component } from '@angular/core';
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor],
  template: `
    <header>
        <div>
            <ul>
                @for(item of menu; track item){
                    <li>
                        <a>
                            {{item.titulo}}
                        </a>
                    </li>
                }
            </ul>
        </div>
    </header>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menu = [
    {
      titulo: 'Home',
      link: '#sobre'
    },
    {
      titulo: 'Institucional',
      link: '#sobre'
    },
    {
      titulo: 'Contatos',
      link: 'string'
    },
    {
      titulo: 'Unidades',
      link: 'string'
    }
  ];
}
