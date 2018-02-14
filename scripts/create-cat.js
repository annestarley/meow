const baseURL = 'http://localhost:3000'

let createCatForm = document.querySelector('#create-cat')
let userId = localStorage.getItem('id')
console.log(userId)

createCatForm.addEventListener('submit', (event) => {
  event.preventDefault()

  let name = document.querySelector('#cat-name').value
  let age = document.querySelector('#cat-age').value
  let gender = document.querySelector('#cat-gender').value
  let fixed = document.querySelector('#fixed').value
  let bio = document.querySelector('#cat-bio').value
  let image1 = document.querySelector('#image1').value
  let image2 = document.querySelector('#image2').value
  let image3 = document.querySelector('#image3').value
  let image4 = document.querySelector('#image4').value

  console.log(name, age, gender, fixed, bio, image1, image2, image3, image4)

  axios.post(`${baseURL}/users/${userId}/cats`, {name, age, gender, fixed, bio, image1, image2, image3, image4, userId})
    .then(result => {
      console.log(result);
      window.location.href ="success.html"
    })
})
