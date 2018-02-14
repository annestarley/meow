const baseURL = 'http://localhost:3000'
let userId = localStorage.getItem('id')
console.log(userId);

axios.get(`${baseURL}/users/${userId}/cats`)
  .then(catsResults => {
    console.log(catsResults.data[0]);

    axios.get(`${baseURL}/users`)
      .then(userResults => {

        catsResults.data.forEach(cat => {

          let h5 = document.createElement('h5')
          let ownerName = document.createElement('h5')
          let ownerPic = document.createElement('img')

          userResults.data.forEach(user => {
            if (user.id == cat.userid) {
              console.log(user)
              h5.innerText = `${user.city}, ${user.state}`
              ownerName.innerText = `${user.username}`
              ownerPic.classList.add('owner-pic')
              ownerPic.setAttribute('src', `${user.image}`)
              ownerPic.setAttribute('alt', `${user.username}`)
            }
          })

          let catBoxes = document.createElement('div')
          catBoxes.classList.add('cat-boxes')
          let crossSpan = document.createElement('span')
          crossSpan.classList.add('glyphicon')
          crossSpan.classList.add('glyphicon-remove')
          crossSpan.setAttribute('id', 'cross')
          let heartSpan = document.createElement('span')
          heartSpan.classList.add('glyphicon')
          heartSpan.classList.add('glyphicon-heart-empty')
          heartSpan.setAttribute('id', 'heart')
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

          catBoxes.appendChild(crossSpan)
          catBoxes.appendChild(heartSpan)
          catBoxes.appendChild(catImage1)
          catBoxes.appendChild(h4)
          catBoxes.appendChild(h5)
          catBoxes.appendChild(age)
          catBoxes.appendChild(gender)
          catBoxes.appendChild(bio)
          catBoxes.appendChild(ownerName)
          catBoxes.appendChild(ownerPic)

          let catBox = document.querySelector('.cat-box')
          catBox.appendChild(catBoxes)
          console.log(catBoxes);
      })

      })
  })
