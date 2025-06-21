<h1>Busca Previsão do Tempo</h1> 

### Tópicos 

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Contribuidores](#contribuidores)
- [Pré-requisitos](#pré-requisitos)
- [Inicializando o Projeto](#inicializando-o-projeto)
- [Imagens do Projeto](#imagens-do-projeto)

# Sobre o Projeto
Este projeto foi elaborado para a matéria de Programação para Dispositivos Móveis, e consiste em uma aplicação web onde o usuário pode consultar a **previsão do tempo para os próximos 5 dias** informando o nome de uma cidade. A previsão é exibida em intervalos de 3 horas, com dados de temperatura mínima, máxima, umidade, descrição e ícone climático.

# Tecnologias
Este projeto utiliza a biblioteca **React**, com o empacotador **Vite**, para criar uma aplicação web leve e rápida. A interface foi construída com **PrimeReact** e opcionalmente estilizada com **PrimeFlex**. As requisições são feitas com **Axios** para um servidor Node.js, que consome a API pública da [OpenWeatherMap](https://openweathermap.org/forecast5#name5) para obter os dados climáticos.

<table align="center">
  <tr>
    <th></th>
    <th>Frontend</th>
    <th>Backend</th>
  </tr>
  <tr>
    <th>Linguagens</th>
    <td>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
        <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black"/>
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
        <img alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/>
      </a>
    </td>
    <td>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
        <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black"/>
      </a>
    </td>
  </tr>
  <tr>
    <th>Frameworks / Bibliotecas</th>
    <td>
      <a href="https://react.dev/">
        <img alt="React" src="https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black"/>
      </a>
      <a href="https://vitejs.dev/">
        <img alt="Vite" src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"/>
      </a>
      <a href="https://primereact.org/">
        <img alt="PrimeReact" src="https://img.shields.io/badge/PrimeReact-%230072C6.svg?style=for-the-badge&logo=prime&logoColor=white"/>
      </a>
      <a href="https://primeflex.org/">
        <img alt="PrimeFlex" src="https://img.shields.io/badge/PrimeFlex-%230072C6.svg?style=for-the-badge&logo=prime&logoColor=white"/>
      </a>
      <a href="https://axios-http.com/">
        <img alt="Axios" src="https://img.shields.io/badge/axios-%230072C6.svg?style=for-the-badge&logo=axios&logoColor=white"/>
      </a>
    </td>
    <td>
      <a href="https://nodejs.org/">
        <img alt="Node.js" src="https://img.shields.io/badge/node.js-%23339933.svg?style=for-the-badge&logo=node.js&logoColor=white"/>
      </a>
      <a href="https://expressjs.com/">
        <img alt="Express" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge"/>
      </a>
      <a href="https://www.npmjs.com/package/dotenv">
        <img alt="dotenv" src="https://img.shields.io/badge/dotenv-%2300C853.svg?style=for-the-badge&logo=npm&logoColor=white"/>
      </a>
      <a href="https://axios-http.com/">
        <img alt="Axios" src="https://img.shields.io/badge/axios-%230072C6.svg?style=for-the-badge&logo=axios&logoColor=white"/>
      </a>
    </td>
  </tr>
  <tr>
    <th>Editor</th>
    <td>
      <a href="https://code.visualstudio.com/">
        <img alt="Visual Studio Code" src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"/>
      </a>
    </td>
    <td>
      <a href="https://code.visualstudio.com/">
        <img alt="Visual Studio Code" src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"/>
      </a>
    </td>
  </tr>
</table>


# Contribuidores
<a href="https://github.com/pedro-Trovo/busca-previsao-tempo/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=pedro-Trovo/busca-previsao-tempo" />
</a>

# Pré-requisitos
1. Instale o [`Node.js`](https://nodejs.org/en) e certifique-se de que ele inclua o `npm`.
2. Faça um cadastro gratuito no site da [OpenWeather](https://openweathermap.org/api) para gerar uma chave de API

# Inicializando o projeto
Faça um `git clone` do repositório:
```console
git clone https://github.com/pedro-Trovo/busca-previsao-tempo
```
## Backend
1. Acesse a pasta `backend`.
2. Crie o arquivo .env e cole sua chave da OpenWeather:
```console
OPENWEATHER_KEY=sua_chave_aqui
```
3. Instale as dependências 
```console
npm install
```
4.  rode o servidor:
```console
npm start
```
5.  O backend estará disponível em:
```console
http://localhost:3000/search?query=NomeDaCidade
```
## Frontend
1. Acesse a pasta `frontend`.
2. Instale as dependências 
```console
npm install
```
3.  rode o servidor:
```console
npm run dev
```
4. Acesse o `localhost` para abrir o site:
```console
http://localhost:5173/
```
# Imagens do Projeto
<img alt="Exibir Previsão" src="readme-img/exibiPrevTemp.png">
