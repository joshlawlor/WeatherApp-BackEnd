
const getWeather = (req,res) => {
    console.log('RAN')
     fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Albany&appid=3e0945e2cccf519756077442032e3083
      `,
      {
        method: "GET",
        headers: new Headers({ 'content-type': 'application/json' })
      })
    .then(response => {
        if (response.ok)
            return response.json();
    })
    .then(response => {
        console.log(response)
        res.json(response.name)
    })
    
}


module.exports = {
    getWeather
}