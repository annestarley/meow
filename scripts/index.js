const baseURL = 'http://localhost:3000'
let userID
let loginForm = document.querySelector('#login-form')


loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  let usernameLogin = document.querySelector('#username-login').value
  let passwordLogin = document.querySelector('#password-login').value

  axios.get(`${baseURL}/users`)
    .then(users => {
      users.data.forEach(user => {
        if (user.username === usernameLogin && user.password === passwordLogin) {
          localStorage.setItem('id', user.id)
          localStorage.setItem('username', user.username)
          window.location.href = "user.html"
        }
      })
    })
    .catch(err => {
      console.log(err)
    })
})
