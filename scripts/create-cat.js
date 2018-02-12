let createCatButton = document.querySelector('.create-cat-profile')
let form = document.querySelector('.form')

createCatButton.addEventListener('submit', () => {
  alert('submitted')
  form.parentNode.removeChild(form)
})
