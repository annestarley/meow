let username = localStorage.getItem('username')
let greeting = document.querySelector('#greeting')
let h2 = document.createElement('h2')
h2.innerText = `Hello ${username}!`

greeting.prepend(h2)
