// const baseURL = 'http://localhost:3000'
const baseURL = 'https://meow-annestarley.herokuapp.com'

let userId = localStorage.getItem('id')
console.log(userId);

let username = localStorage.getItem('username')
let greeting = document.querySelector('#greeting')
let h2 = document.createElement('h2')
h2.innerText = `Hello ${username}!`

greeting.prepend(h2)

axios.get(`${baseURL}/users/${userId}`)
  .then(userResults => {
    let profilePic = document.createElement('img')
    profilePic.setAttribute('src', `${userResults.data[0].image}`)
    console.log(userResults.data[0].image);
  })
