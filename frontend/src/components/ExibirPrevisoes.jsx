import { Card } from 'primereact/card';
import striptags from 'striptags';

const ExibirPrevisoes = ({ previsaoTempo }) => {
  return (
    <div
      className="flex flex-column gap-5 items-center"
      style={{ width: '380px' }}
    >
      {previsaoTempo.map((item, index) => {
        return (
          <Card
            key={index}
            className="rounded-2xl p-4 border-round-md"
            style={{
              fontFamily: 'Arial, sans-serif',
              backgroundColor: '#ecfff9',
            }}
          >
            <div className="flex justify-content-evenly items-center">
              <div className="flex flex-column align-items-center justify-content-center gap-3">
                <div className="flex flex-column gap-2 text-center">
                  <p className="m-0 font-semibold">
                    Máxima: {striptags(String(item.temp_max))} °C
                  </p>
                  <p className="m-0 font-semibold">
                    Mínima: {striptags(String(item.temp_min))} °C
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#0e83c7"
                    className="bi bi-droplet"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21.8C7.69.295 8 0 8 0q.164.544.371 1.038c.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8m.413 1.021A31 31 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87z"
                    />
                  </svg>
                  <p className="m-0 font-medium">
                    {' '}
                    {striptags(String(item.umidade))}%
                  </p>
                </div>
              </div>

              <div className="flex flex-column items-center">
                <img
                  src={`https://openweathermap.org/img/wn/${striptags(
                    item.icon
                  )}@2x.png`}
                  alt={striptags(item.descricao)}
                />
                <p className="m-0 capitalize text-sm text-center">
                  {striptags(item.descricao)}
                </p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default ExibirPrevisoes;
