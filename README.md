## Desafio TagInput
A proposta desse desse desafio foi criar um componet para inserir tag ao se digitar emails no campo de input

### TELA
[<img src="docs\telas\768.jpeg" width="250"/>](docs\telas\768.jpeg)

### Tecnologias usadas
- React;
- Material Ui;
- SASS;
- JEST;
- YUP (instalado mas não utilizado);
- ESLint (substituiu o TSLint);

### Mudança de Linter

A mudança de lint aconteceu por está tendo varios conflitos no VS Code e a dificuldade de resolve-los, provavelmente pela descontinuidade do projeto. Com isso resolvir trocar pelo ESLint, que tem também possuim suporte a TS.

### Problemas com uso do YUP para validação

Resolvi usar o YUP para fazer as validações do projeto e não me preocupar tanto com isso, entretanto a complexide para integrar com o input do Material UI da forma com desejava seria tão custosa quanto criar um arquivo separado para validação. Nesse caso para ter mais controle foi criado um hook simples para definir o campo valido ou invalido se uma determida condição for saisfeita.

### Problemas com o mock de Api

Tive alguns problemas de subir a roda de `PATCH` com o Prism e onde sempre recebia erro 500 ou 422, ao procurar solução achei algumas relatos parecidos no github do projeto. Decidir usar o Postman para fazer o mock da api entao recebi de JSON invalido ou erro de servidor, ao ir atrás de solução notei que o [swagger.io](https://editor.swagger.io) avisava para problemas na rota utilizando `FECTH` mais so sobre o assunto. Tentando solucionar o problema descobri ao comentar a linha 119 obtinha resposta.
Isso deve acontecer pois o mock deve esperar algum parametro para o corpo da requisição, apesar de tentar diferentes formas e comparar com a solicitação e resposta no [swagger.io](https://editor.swagger.io), a altenativa foi realmente comentar a linha.

### Testes

A ultima coisa que fiz foram os testes entretanto não fiz todos.

Criei um teste para vê se o input estava recebendo o valor digitado.

Implementei o teste de renderizar caso o `TAB` seja precionado, pela natureza da função de `onBlur` que utilizai no input, o novo valor não é realmente adicionado a tela entretando atraves do props `changeValue` toda vez que é precionado o `TAB` a função de `onBlur` é chamada. Esse caso pode ser necessario utilizar também testes te integração.

### Outras Intruções

As intruções iniciais desse desafio e que não foram alteradas estão no diretorio `docs` ou voce pode clicar [aqui](docs\Instruções.md)