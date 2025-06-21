require('dotenv').config()//acessar arquivo env
const axios = require('axios')// para conectar com apis externas fazer rq http
const cors = require('cors')
const express = require('express')
const app = express()

// o front e o back tem dominios diferente,
// o navegador bloqueia requisições entre dominios diferente
// o cors permite o front se comunicar com essa api do express sem bloquear
app.use(cors())

// cria a comunicação com a api externa defini a url base com os parametros que fixos 
const weatherClient = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',       //api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
  params: {
    appid: process.env.OPENWEATHER_KEY,//process ambiente onde o codigo tá rodando
    units: 'metric',
    lang: 'pt_br'
  }
})

// define uma rota get que recebe a requisição(uma cidade como parametro) e envia a resposta da api
app.get('/search', async (req, res) => {   // http://localhost:3000/search?query=saopaulo
  const query = req.query.query  // acesso a rota da rq para pegar o valor da query que é o nome da cidade
  const result = await weatherClient.get('forecast', { //  weather faz a req das prev para api e guarda  resposta da api no result,
    params: { q: query }  // tá adicionando o nome dda cidade no parametro q na url da api externa
  })

          //definido uma vetor  dadosfiltrados que vai armazenar os dados selecionados da prev
          //   //acessando a lista de result que a api retorna, vou percorrer a list com map, e acessr objeto atual que é representado pelo item
  const dadosFiltrados = result.data.list.map(item => ({
    temp_min: item.main.temp_min,//estou acessando o campo temp_min, do objeto main do objeto atual que api retorna e atribuindo para o campo tem_min do array
    temp_max: item.main.temp_max,
    umidade: item.main.humidity,
    icon: item.weather[0].icon, // acessando campo icon do vetor wether do objeto atual e atribuindo ao campo icon do vetor dadosFil
    descricao: item.weather[0].description
  }))

  res.json(dadosFiltrados) // envia em formato json o vetor dados filtrados pro front 
})

const port = 3000
app.listen(port, () => console.log(`Back End OK! Porta ${port}.`))
// inicia o serviço express, função executada quando o servidor começa a funcionar