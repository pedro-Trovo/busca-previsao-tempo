import { useEffect, useState } from 'react';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import Busca from './components/Busca';
import ExibirPrevisoes from './components/ExibirPrevisoes';

function App() {
  const [previsaoTempo, setPrevisaoTempo] = useState([]);

  return (
    <div className="flex flex-column align-items-center gap-5 mt-8">
      <Busca setPrevisaoTempo={setPrevisaoTempo} />
      <ExibirPrevisoes previsaoTempo={previsaoTempo} />
    </div>
  );
}

export default App;
