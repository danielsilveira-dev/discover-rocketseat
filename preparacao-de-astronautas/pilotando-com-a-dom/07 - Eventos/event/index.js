const input = document.querySelector('input')
input.onkeydown = function (event) {
  console.log(event.currentTarget.value)
}
// input.onclick = function (event) {
//   console.log(event)
// }
// input.onkeypress = function (event) {
//   console.log(event)
// }