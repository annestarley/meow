// const baseURL = 'http://localhost:3000'
const baseURL = 'https://meow-annestarley.herokuapp.com'

let userId = localStorage.getItem('id')

axios.get(`${baseURL}/users/${userId}/cats`)
  .then(catsResults => {

    axios.get(`${baseURL}/users`)
      .then(userResults => {

        catsResults.data.forEach(cat => {

          let h5 = document.createElement('h5')
          let ownerName = document.createElement('h5')
          let ownerPic = document.createElement('img')

          userResults.data.forEach(user => {
            if (user.id == cat.userid) {
              h5.innerText = `${user.city}, ${user.state}`
              ownerName.innerText = `${user.username}`
              ownerPic.classList.add('owner-pic')
              ownerPic.setAttribute('src', `${user.image}`)
              ownerPic.setAttribute('alt', `${user.username}`)
            }
          })

          let catBoxes = document.createElement('div')
          catBoxes.classList.add('cat-boxes')
          catBoxes.style.height = '300px'
          let catImage1 = document.createElement('img')
          catImage1.classList.add('cat-profile-pic')
          catImage1.setAttribute('src', cat.image1)
          catImage1.setAttribute('alt', `${cat.name} image`)
          let h4 = document.createElement('h4')
          h4.innerText = cat.name
          let age = document.createElement('p')
          age.innerText = `age: ${cat.age}`
          let gender = document.createElement('p')
          gender.innerText = `gender: ${cat.gender}`
          let bio = document.createElement('p')
          bio.innerText = `bio: ${cat.bio}`
          let catId = document.createElement('p')
          catId.innerText = `${cat.id}`
          catId.style.display = 'none'
          let deleteButton = document.createElement('button')
          deleteButton.innerText = 'Delete?'
          deleteButton.classList.add('delete-button')

          catBoxes.appendChild(catImage1)
          catBoxes.appendChild(h4)
          catBoxes.appendChild(h5)
          catBoxes.appendChild(age)
          catBoxes.appendChild(gender)
          catBoxes.appendChild(bio)
          catBoxes.appendChild(catId)
          catBoxes.appendChild(ownerName)
          catBoxes.appendChild(ownerPic)
          catBoxes.appendChild(deleteButton)

          let catBox = document.querySelector('.cat-box')
          catBox.appendChild(catBoxes)


          deleteButton.addEventListener('click', () => {
            if (confirm(`Delete ${cat.name}?`)) {

              let id = cat.id
              axios.delete(`${baseURL}/users/${userId}/cats/${id}`)
              .then(results => {
                location.reload()
              })
            }
          })
      })
    })
  })
