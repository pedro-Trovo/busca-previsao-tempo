import { useEffect, useState } from 'react';
import openweatherClient from '../utils/openweatherClient';

const Busca = ({ setPrevisaoTempo }) => {
  const [termoBusca, setTermoBusca] = useState('São Paulo');

  useEffect(() => {
    const onBuscarPrevisaoTempo = async () => {
      const { data } = await openweatherClient.get(
        `/search?query=${termoBusca}`
      );

      setPrevisaoTempo(data);
    };

    const debounce = setTimeout(() => {
      if (termoBusca.length >= 3) onBuscarPrevisaoTempo();
    }, 2000);

    return () => {
      clearTimeout(debounce);
    };
  }, [termoBusca]);

  return (
    <div className="relative w-min">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#969696"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-search absolute top-0 bottom-0 my-auto ml-2"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <input
        type="text"
        className="py-2 pl-6 pr-2 w-15rem text-base"
        placeholder="Insira o nome de uma cidade...."
        value={termoBusca}
        onChange={e => setTermoBusca(e.target.value)}
      />
    </div>
  );
};

export default Busca;
