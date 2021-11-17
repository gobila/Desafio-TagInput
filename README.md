## Desafio TagInput
A proposta desse desafio foi criar um componente para inserir tag ao se digitar e-mails no campo de input

### TELA
[<img src="docs\telas\768.jpeg" width="250"/>](docs\telas\768.jpeg)

### Tecnologias usadas
- React;
- Material Ui;
- SASS;
- JEST;
- YUP (instalado, mas não utilizado);
- ESLint (substituiu o TSLint);

### Mudança de Linter

A mudança de Lint aconteceu por estar tendo vários conflitos no VS Code e a dificuldade de resolvê-los, provavelmente pela descontinuidade do projeto. Com isso resolvi trocar pelo ESLint, que tem também possui suporte a TS.

### Problemas com uso do YUP para validação

Resolvi usar o YUP para fazer as validações do projeto e não me preocupar tanto com isso, entretanto a complexidade para integrar com o input do Material UI da forma com desejava seria tão custosa quanto criar um arquivo separado para validação. Nesse caso para ter mais controle foi criado um hook simples para definir o campo valido ou invalido se uma determinada condição for satisfeita.

### Problemas com o mock de Api

Tive alguns problemas de subir a roda de `PATCH` com o Prism e onde sempre recebia erro 500 ou 422, ao procurar uma solução achei alguns relatos parecidos no github do projeto. Decidir usar o Postman para fazer o mock da api então recebi de JSON invalido ou erro de servidor, ao ir atrás de solução notei que o [swagger.io](https://editor.swagger.io) avisava para problemas na rota utilizando `FECTH` mais so sobre o assunto. Tentando solucionar o problema descobri ao comentar a linha 119 obtinha resposta.
Isso deve acontecer pois o mock deve esperar algum parâmetro para o corpo da requisição, apesar de tentar diferentes formas e comparar com a solicitação e resposta no [swagger.io](https://editor.swagger.io), a alternativa foi realmente comentar a linha.

### Testes

A última coisa que fiz foram os testes, entretanto não fiz todos.

Criei um teste para ver se o input estava recebendo o valor digitado.

Implementei o teste de renderizar caso o `TAB` seja pressionado, pela natureza da função de `onBlur` que utilizai no input, o novo valor não é realmente adicionado a tela, entretanto através do props `changeValue` toda vez que é pressionado o `TAB` a função de `onBlur` é chamada. Esse caso pode ser necessário utilizar também testes te integração.

### Outras Instruções

As instruções iniciais desse desafio e que não foram alteradas estão no diretório `docs` ou você pode clicar [aqui](docs\Instruções.md)

