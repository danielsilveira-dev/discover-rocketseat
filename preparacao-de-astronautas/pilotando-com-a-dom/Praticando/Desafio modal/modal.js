const btn = document.querySelector('#openModal')

const div = document.querySelector('.modal-wrapper')

btn.addEventListener('click', function (){
  const div = document.querySelector('.modal-wrapper')
  div
  .classList
  .remove('invisible')
})

document.addEventListener('keydown', function(event){
  const modalWrapper = div.classList.contains('invisible')
  console.log(modalWrapper)
  const isEscKey = event.key === 'Escape'

  
  if(!modalWrapper && isEscKey) {
    div.classList.add('invisible')
  }
})

// div.addEventListener('keydown', function(){
//   div.classList.add('invisible')
// })