import { useState } from 'react';
import './App.css';

const aliquotas = {
  SP: 12,
  RJ: 18,
  MG: 13,
  ES: 17,
  // Adicione outros estados aqui conforme necessário
};

function App() {
  const [estado, setEstado] = useState('SP');
  const [valorCarga, setValorCarga] = useState('');
  const [icms, setIcms] = useState(null);

  const calcularICMS = () => {
    const aliquota = aliquotas[estado];
    if (aliquota && valorCarga) {
      const valor = parseFloat(valorCarga);
      const resultado = (valor * (aliquota / 100)).toFixed(2);
      setIcms(`R$ ${resultado}`);
    } else {
      setIcms(null);
    }
  };

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>Tabela de ICMS por Estado - 2025</h1>

      <div>
        <label>Estado:</label>
        <select value={estado} onChange={(e) => setEstado(e.target.value)}>
          {Object.keys(aliquotas).map((uf) => (
            <option key={uf} value={uf}>{uf}</option>
          ))}
        </select>
      </div>

      <div style={{ marginTop: 10 }}>
        <label>Valor da Carga (R$):</label>
        <input
          type="number"
          value={valorCarga}
          onChange={(e) => setValorCarga(e.target.value)}
        />
      </div>

      <div style={{ marginTop: 10 }}>
        <button onClick={calcularICMS}>Calcular ICMS</button>
      </div>

      {icms && (
        <div style={{ marginTop: 20 }}>
          <strong>Valor do ICMS: {icms}</strong>
        </div>
      )}
    </div>
  );
}

export default App;
