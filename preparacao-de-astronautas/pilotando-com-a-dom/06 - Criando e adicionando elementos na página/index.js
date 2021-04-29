// Criando e adicionando elementos

// createElement
const div = document.createElement('div')
div.innerText = "Olá Devs!"

// append(Depois) prepend(antes)
const body = document.querySelector('body')
// body.append(div)
// Depois de qualquer elemento o append adiciona esse filho
// body.prepend(div)
// Antes de qualquer elemento, o prepend adiciona esse filho

// insertBefore(newElement, nóReferencia)
// const script = body.querySelector('script')
// body.insertBefore(div, script)

// insertAfter
const header = body.querySelector('header')
body.insertBefore(div, header.nextElementSibling)