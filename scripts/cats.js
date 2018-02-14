const baseURL = 'http://localhost:3000'


axios.get(`${baseURL}/cats`)
  .then(results => {
    console.log(results);
  })
