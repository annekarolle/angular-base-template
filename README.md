# Angular Base Template - **_version 17.0.9._**

Este é um projeto desenvolvido em Angular na versão 17, seguindo os padrões mais recentes e melhores práticas recomendadas pela equipe de desenvolvimento do Angular.


## Documentação
A documentação oficial do Angular 17 pode ser encontrada <a href="https://angular.dev/">aqui</a>. 
Recomendo fortemente a leitura desta documentação para entender melhor a estrutura, os recursos e as diretrizes de desenvolvimento do novo Angular.


### Requisitos do Projeto
Certifique-se de ter os seguintes requisitos instalados antes de começar:
 - Node.js
 - npm


### Como Iniciar o Projeto
Instale as Dependências:
Execute o seguinte comando no terminal para instalar todas as dependências necessárias:
 ```
npm install
 ```
 Inicie o Servidor de Desenvolvimento:
Utilize o seguinte comando para iniciar o servidor de desenvolvimento:
 ```
ng serve
 ```
<p>O aplicativo estará disponível em http://localhost:4200/. Abra este URL no seu navegador para visualizar o projeto.</p>


## NgFor

- Antes
```
<div *ngFor="let item of lista">
    <span>{{item.titulo}}</span>
</div>
```

- Agora
  - Importar o NgFor no componente, nesse modelo está sendo usando o template 

```

@Component({
  selector: 'app-component',
  standalone: true,
  imports: [NgFor],
  template: `


    <div>
        @for(item of lista; track item)
        {
            <span>{{item.titulo}}</span>
        }
    </div>
    
  `,
  styleUrl: './component.component.css'
})


export class Component {
  lista = []    
}
 

```


## NgIf

- Antes
```
<ng-container *ngIf="titulo === 'Empresa A'; else empresaBTemplate">
    <span>{{titulo}}</span>
</ng-container>

<ng-template #empresaBTemplate>
    <span>{{titulo}}</span>
    <p>Informações exclusivas da Empresa B</p>
</ng-template>
```

- Agora
  - Importar o NgFor no componente, nesse modelo está sendo usando o template 

```

@Component({
  selector: 'app-component',
  standalone: true,
  imports: [NgIf],
  template: `


    <div>
        @if("titulo === 'Empresa A')
        {
            <span>{{titulo}}</span>
        }
        @else{
            <span>{{titulo}}</span>
            <p>Informações exclusivas da Empresa B</p>
        }
    </div>
    
  `,
  styleUrl: './component.component.css'
})


export class Component {
  titulo:string = ""  ;  
}
 

```