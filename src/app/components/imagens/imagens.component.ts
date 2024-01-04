import { Component } from '@angular/core';
import {NgFor, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-imagens',
  standalone: true,
  imports: [NgOptimizedImage, NgFor],
  template: `
    <div class="imagens">
        @for(item of imagens; track item){
            <div class="container-imagem">
                <img ngSrc="{{item}}" width="200" height="200" priority>
            </div>
        }


    </div>
  `,
  styleUrl: './imagens.component.css'
})
export class ImagensComponent {

  imagens = ['../../../assets/1.png',
    '../../../assets/2.png',
    '../../../assets/3.png',
    '../../../assets/4.jpg']


}
