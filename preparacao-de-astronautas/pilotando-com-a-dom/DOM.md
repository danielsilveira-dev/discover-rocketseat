# DOM (Document Object Model)

* É o HTML convertido para um Objeto JavaScript
* API que representa e interage com o HTML
* Estrutura de dados do tipo árvore, criada pelo browser
* Propriedades e métodos

# Para que ?
* JavaScript usa a DOM para se conectar ao HTML
* Manipular o HTML com o JavaScript
* Você só programa pra Web por que existe a DOM

## getElementById

Para usar o `getElementById` posso fazer da seguinte forma:
```html
<body>
  <h1 id="blog-title">Meu Blog</h1>    
</body>
```  

Dentro do parênteses do `getElementById('id')` coloco o id que defini no html.
```javascript
const element = document.getElementById('blog-title')
```

## getElementByClassName

Para usar o `getElementByClassName` posso fazer da seguinte forma:
```html
<body>
  <h1 id="blog-title">Meu Blog</h1>
  <p class="one"></p>   
</body>
```  

Dentro do parênteses do `getElementById('id')` coloco o id que defini no html.
```javascript
const element = document.getElementsByClassName('one')
```
Irá aparecer no console.log o `HTMLCollection(2)[h1.one, p.one]` selecionados.

## getElementByTagName

Para usar o `getElementByTagName` posso fazer da seguinte forma:
```html
<body>
  <h1 id="blog-title">Meu Blog</h1>
  <p class="one"></p>   
</body>
```  

Dentro do parênteses do `getElementByTagName('tagHtml')` coloco tag html.
```javascript
const element = document.getElementByTagName('h1')
```
Irá aparecer no console.log o `HTMLCollection(2)[h1.one]` selecionado.

## querySelector

Para usar o `querySelector` posso fazer da seguinte forma:
```html
<body>
  <h1 class="blog-title">Meu Blog</h1>
  <p class="one"></p>   
</body>
```  

Dentro do parênteses do `querySelector('.nomeDaClasse')` coloco a tag ou .classe ou #id que defini no html.
```javascript
const element = document.querySelector('.one')
```

## querySelectorAll

Para usar o `querySelectorAll` posso fazer da seguinte forma:
```html
<body>
  <h1 class="blog-title">Meu Blog</h1>
  <p class="one"></p>   
</body>
```  

Dentro do parênteses do `querySelectorAll('.nomeDaClasse')` coloco a tag ou .classe ou #id que defini no html.
```javascript
const element = document.querySelectorAll('.one')
```
Este, irá selecionar todos os elementos relacionados à esta query

### Qual usar?

getElementById **(element)**  
getElementByClassName **(HTMLCollection)**  
getElementByTagName **(HTMLCollection)**  
querySelector **(element)**  
querySelectorAll **(Nodelist)**  

# Manipulando conteúdos

## textContent
Para manipular um texto de dentro de um elemento podemos usar o `textContent`!  

Por exemplo:
```html
<h1>Daniel</h1>
```
```javascript
const element = document.querySelector(h1)
element.textContent = "Suzanne"
element.textContent += " Suzanne" // Daniel Suzanne (Concatena valor com valor atual)
console.log(element.textContent) // Utiliza o valor de element.textContent
```

## innerText

Troca o texto interno do elemento HTML
```html
<body>
  <h1>Meu Blog</h1>
  <script src="./script.js"></script>
</body>
```
```javascript
const element = document.querySelector('h1')
element.innerText = "Olá Devs!"

console.log(element.innerText)
```

## innerHTML

Com o atributo `innerHTML` podemos inserir Tags HTML dentro do valor.  

Por exemplo:
```html
<body>
  <h1>Meu Blog</h1>
  <script src="./script.js"></script>
</body>
```
```javascript
const element = document.querySelector('h1')
element.innerHTML = "Olá Devs! <small>!!!</small>"
```  
O resultado é: `Olá Devs! !!!`  
**OBS**: Com a propriedade `textContent` só é possível adicionar textos e não, tags HTML

## value
Com atributo value, podemos usar para elementos que usam este atributo como `<input>`
Por exemplo:
```html
<body>
  <h1>Meu Blog</h1>
  <script src="./script.js"></script>
</body>
```
```javascript
const element = document.querySelector('h1')
element.innerHTML = "Olá Devs! <small>!!!</small>"
```  
## Manipulando atributos

Podemos manipular os atributos da seguinte forma:  

```html
<header class="bg">
    <h1>Meu Blog</h1>
  </header>
  <script src="./script.js"></script>
```
```javascript
const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')

console.log(headerID.getAttribute('class'))

header.removeAttribute('id')

header.setAttribute('class', 'bg header')
```

## Alterando estilos com classe

```javascript
const element = document.querySelector('body')
// Primeiro, selecionamos o elemento que precisamos colorir ou alterar o estilo.

element.style.backgroundColor = "#f9f3d2"
// Com o elemento.style.backgroundColor = "#f9f3d2" podemos colorir o elemento

console.log(element.style.backgroundColor)
// Podemos pegar a cor que está sendo utilizada.
```

## classList & toggle

```javascript

```
# Eventos
## Adicionando eventos via JS

Quando digitamos depois da tag do elemento a palavra `'on'` irá aparecer uma série de eventos que podemos implementar em nosso elemento.

```html
<body>
  <h1>Meu Blog</h1>
  <script src="./index.js"></script>
</body>
```
```javascript
const h1 = document.querySelector('h1')
h1.addEventListener('click', print)
function print(){
  console.log('print')
}
```
**OBS**: a função `addEventListener` requer dois argumentos:  
 - A ação, como um evento de `'click'`
 - Uma função
## Adicionando eventos via JS (Outro método)
```javascript
const h1 = document.querySelector('h1')
h1.onclick = print
function print(){
  console.log('print')
}
```
**Atenção**!
Se atentar quando for usar uma função diretamente em algum elemento e depois usar um `addEventListener`, a função `addEventListener` pode sobrescrever a primeira função, por exemplo:
```javascript
const h1 = document.querySelector('h1')
h1.onclick = print
function print(){
  console.log('print')
}

h1.onclick = function(){
  console.log('outro momento')
}

h1.addEventListener('click', print)

h1.addEventListener('click', function(){
  console.log('outro momento')
})
```

## Eventos
Com a palavra chave `event` podemos realizar diversas funções em um elemento por exemplo:

### Coletar as funções que você pode utilizar
```javascript
input.onkeydown = function(event){
  console.log(event)
}
```

### Coletar o que está sendo digitado
```javascript
input.onkeydown = function(event){
  console.log(event.key)
}
```
### Coletar o target onde está sendo digitado
```javascript
input.onkeydown = function(event){
  console.log(event.currentTarget)
}
```
### Podemos coletar valores

```javascript
const input = document.querySelector('input')
input.onkeydown = function (event) {
  console.log(event.currentTarget.value)
}
```
