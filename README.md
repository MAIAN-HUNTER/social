# Frontend Mentor - Article preview component master

Olá a todos! este é mais um desafio de Front End mentor concluído com sucesso! É uma grande satisfação compartilha-lo com o mundo mais uma vez!

## Ideias, Planejamento e Execução
definitivamente umm dos mais desafiadores dos exercicios atualmente. Como sempre, uma visão mais limpa possivel do projeto foi escolhida para melhor visualização do usuario, optei por mesclas da ferramenta de grid e flexbox para a localização de colunas, linhas e principalmente centralizações de alinhamentos especificos de cada elemento, como as imagens e as tags de HTML como button, divs, imagens, spans e textos. optei também por usar numerações especificas de pixels para os elementos de botão e links, como se fossem coordenadas para os mesmos pois, com a mescla de grid e flexbox, não era possivel alinhar tudo perfeitamente apenas com flex start, center e end, foi algo diferente de se trabalhar mas no fim, deu certo. Há desenvolvedores senior que não recomendam esta pratica, porem decide isto para testar possibilidades. usei também classes css sem mesmo atribui-las à tags HTML para a ativação de efeitos no botão de share com javascript.

### O que eu aprendi
uso mais preciso de margin, padding, grid, flexbox. classes css podem ser ativadas sem serem atribuidas à tags HTML usando javascript e uso de funções, ações e variaveis com codigo JS.

```html
<button onclick='mostrarLinks()' id="myBtn" class="btn">
                  <img src="./images/icon-share.svg" alt="">
              </button>
```
```css
  .share-active {
    background-color: #6e8098;
  }

  .share-active-img img {
    filter: brightness(10);
  }
```
```js
    const mostrar = document.getElementById('myBtn');

const mostre = document.querySelector('.links');

mostrar.addEventListener("onclick", mostrarLinks);

function mostrarLinks(){
    mostre.classList.toggle("mostrar");

    if(mostrar.classList.contains('share-active')){
        mostrar.classList.remove('share-active','share-active-img');
    } else{
        mostrar.classList.add('share-active', 'share-active-img');
    }
};
```

### Desenvolvimentos futuros
Continuarei com os desafios do site Font end mentor
### sites com recursos Úteis

- [site W3schools](https://www.w3schools.com/css/css_rwd_intro.asp) - Este site me auxiliou a me localizar melhor nas diversas ferramentas de estilizações que o CSS tem a oferecer.

## Autor
- Frontend Mentor - [@MAIAN-HUNTER](https://www.frontendmentor.io/profile/MAIAN-HUNTER)
- Linkedin - [Maian-Lucas](https://www.linkedin.com/in/maian-lucas-1a796026a/)

## Conhecimentos
92% de meu conhecimento foi adquirido pelo curso de programação Dev Quest, oa outros 8% foram de documentações de sites da internet como o proprio Frontend Mentor, W3schools e de videos da plataforma youtube.