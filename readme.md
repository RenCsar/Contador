# Introdução ao Javascript 

##  Projeto Contador

Nesse projeto do Bootcamp Inter Frontend Developer da [DIO](https://digitalinnovation.one/) e desenvolvido por [Stephany Nusch](https://github.com/stebsnusch), criamos um contador utilizando HTML, CSS e JS. Tive a oportunidade de relembrar métodos e propiedades como: <span style="color:red">`onclick`</span> , `getElementById` e  `innerHTMl`, onde utilizamos:

`onclick`: utilizado para chamar as funções `decrement( )` e `inclement( )` quando os respectivos botões forem clicados;

`getElementById`: utilizado para obter um elemento com id `CurrentNumber` dentro da tag `span` do documento html para posteriormente manipularmos através das funções;

 `innerHTMl` : usado para manipular o DOM e alterar a tag `span` com o id `CurrentNumber` .

Para a estilização com CSS, pelo padrão do projeto, foi importado a font `Open Sans` do google fonts e `Flexbox` para organizar o layout.

Decidi alterar as cores que foram declaradas diretamente ao longo do código para variáveis CSS declaradas na pseudo-classe `:root`, visando facilitar futura mudança nas cores.

Após o termino do projeto foi deixado os seguintes desafios:

1.  Implementar os eventos usando o método `addEventListenner`;
2. Criar condicionais para desabilitar os botões ( ex: o `count` chegando no 10 desabilita o botão incrementar);
3. Mude a cor do texto em `CurrentNumber` para vermelho quando o número for negativo.

#### Em breve tentarei resolve-los.