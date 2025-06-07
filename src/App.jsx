import { useEffect, useState } from 'react';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import Busca from './components/Busca';

function App() {
  const [previsaoTempo, setPrevisaoTempo] = useState('');

  return (
    <div>
      <Busca setPrevisaoTempo={setPrevisaoTempo} />
    </div>
  );
}

export default App;
