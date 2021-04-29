// Navegando pelos elementos
// parentNode parentElement
const body = document.querySelector('body')
const header = document.querySelector('header')
console.log(body.parentNode)
console.log(body.parentElement)

// Pegando os elementos filhos
console.log(body.childNodes)
console.log(body.children)

// Com Node List, é possível usar for each
// firstChild firstElementChild
console.log(body.firstChild) // Leva em consideração o espaço vazio
console.log(body.firstElementChild) // Não leva em consideração o espaço vazio

// lastChild lastElementChild
console.log(body.lastChild)
console.log(body.lastElementChild)

// Navegando pelos elementos irmãos
console.log('----------------------------------------')
console.log('### Navegando pelos elementos irmãos ###\n\n')
console.log('### nextSibling ###')
console.log(header.nextSibling)
console.log('### nextElementSibling ###')
console.log(header.nextElementSibling)
console.log('previousSibling e previousElementSibling')
console.log(header.previousSibling)
console.log(header.previousElementSibling)