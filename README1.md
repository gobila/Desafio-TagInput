1 - Troquei o TSlint pelo ESlint pois o TSlint foi descontinuado e eu nao estava conseguindo fazer funcionar bem com o VScode.

2 - instalei as dependencias necesarios para o uso do ESlint

3 - instalei o PropTypes para evitar que as props se "percam"  e entrem conflito 

4 - Pensando em substituir os arquivos em TypeScript por JavaScript, pois estou com dificuldade em chamar eventos de onBlur, pois o lint reclamada de nao ter tipo e mesmo importanto o FocusEvent o problema continua e nao acho solução oficial 

4.1 - talvez faça sentido apenas separar em um componente externo

5 - poderia usar o husky para evitar enviar pro git com problemas de lint

6 - preciso configurar o CI do git

7 - pensei em usar o YUP para fazer a validaação dos campos mas não funcionou como eu esperava, logo depois de muito bater a cabeça a solução mais eficiente foi criar alguns laços ifs com uma validação via regex
7.1 - separa a validação como um hook 

8 - o gitGuardian fica reclamando do token, entao eu adicionei um env.local para ele para entretanto nao faz tanta diferença ja q o token não é real

9 - precisei excluir definir regras de exclução do lint no arquivo de testes devido ao regex usado e ao async vazio do modelo