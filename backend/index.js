require('dotenv').config()
const axios = require('axios')
const cors = require('cors')
const express = require('express')
const app = express()


app.use(cors())


const weatherClient = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',     
  params: {
    appid: process.env.OPENWEATHER_KEY,
    units: 'metric',
    lang: 'pt_br'
  }
})

app.get('/search', async (req, res) => {  
  const query = req.query.query  
  const result = await weatherClient.get('forecast', { 
    params: { q: query }  
  })

          
  const dadosFiltrados = result.data.list.map(item => ({
    temp_min: item.main.temp_min,
    temp_max: item.main.temp_max,
    umidade: item.main.humidity,
    icon: item.weather[0].icon, 
    descricao: item.weather[0].description,
    data: new Date(item.dt * 1000).toISOString()
  }))

  res.json(dadosFiltrados) 
})

const port = 3000
app.listen(port, () => console.log(`Back End OK! Porta ${port}.`))
