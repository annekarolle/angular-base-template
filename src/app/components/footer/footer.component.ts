import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
  <footer>
      <ul>
      <li>
          <span>

          {{informacoesLocal.endereco}}
        </span>
      </li>
      <li>
          <span>

          {{informacoesLocal.telefone}}  | {{informacoesLocal.email}}
        </span>
      </li>
      <li>
          <span>

          {{informacoesLocal.horarioFuncionamento}}
        </span>
      </li>
      </ul>
  </footer>
  `,
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  informacoesLocal = {
    endereco: '123 Rua Fictícia, Quadra 456 - Lote 789 - Bairro Imaginário, Cidade dos Sonhos - XX, 12345-678',
    telefone: '(00) 1234-5678',
    email: 'contato@exemplo.com',
    horarioFuncionamento: 'Segunda a Sexta-feira das 9h às 18h',
    sugestaoNovosHorarios: 'Sugerir novos horários através do e-mail sugestoes@exemplo.com',
  };
}
