1 - Troquei o TSlint pelo ESlint pois o TSlint foi descontinuado e eu nao estava conseguindo fazer funcionar bem com o VScode.

2 - instalei as dependencias necesarios para o uso do ESlint

3 - instalei o PropTypes para evitar que as props se "percam"  e entrem conflito 

4 - Pensando em substituir os arquivos em TypeScript por JavaScript, pois estou com dificuldade em chamar eventos de onBlur, pois o lint reclamada de nao ter tipo e mesmo importanto o FocusEvent o problema continua e nao acho solução oficial 

4.1 - talvez faça sentido apenas separar em um componente externo

5 - poderia usar o husky para evitar enviar pro git com problemas de lint

6 - preciso configurar o CI do git