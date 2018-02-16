// const baseURL = 'http://localhost:3000'
const baseURL = 'https://meow-annestarley.herokuapp.com'

let id;

// POST REQUESTS

// post user
let createUserButton = document.querySelector('#create-user-profile')

createUserButton.addEventListener('submit', (event) => {
  event.preventDefault()

  let name = document.querySelector('#username').value
  let password = document.querySelector('#password').value
  let city = document.querySelector('#city').value
  let state = document.querySelector('#state').value
  let zip = document.querySelector('#zip').value
  let email = document.querySelector('#email').value
  let hidden
  if (document.querySelector('#match').checked) {
    hidden = true
  } else {
    hidden = false
  }
  let image = document.querySelector('#image').value

  // console.log(name, password, email, hidden, image, city, state, zip);

  // LOCAL STORAGE
  localStorage.setItem('username', name)
  // localStorage.setItem('password', password)

  axios.post(`${baseURL}/users/`, {name, password, email, hidden, image, city, state, zip})
    .then(result => {
      id = result.data[0].id
      localStorage.setItem('id', id)
      console.log('RESULT___________', result)
      console.log(('ID__________' + id));
      window.location.href = "user.html";
    })
})
