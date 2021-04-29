const h1 = document.querySelector('h1')
h1.onclick = print
function print(){
  console.log('print')
}

h1.onclick = function(){
  console.log('outro momento')
}