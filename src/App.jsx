import React, { useState } from 'react';

const icmsData = [
  { estado: 'AC', percentual: 17 },
  { estado: 'AL', percentual: 18 },
  { estado: 'AM', percentual: 18 },
  { estado: 'AP', percentual: 18 },
  { estado: 'BA', percentual: 18 },
  { estado: 'CE', percentual: 18 },
  { estado: 'DF', percentual: 18 },
  { estado: 'ES', percentual: 17 },
  { estado: 'GO', percentual: 17 },
  { estado: 'MA', percentual: 18 },
  { estado: 'MT', percentual: 17 },
  { estado: 'MS', percentual: 17 },
  { estado: 'MG', percentual: 18 },
  { estado: 'PA', percentual: 17 },
  { estado: 'PB', percentual: 18 },
  { estado: 'PR', percentual: 18 },
  { estado: 'PE', percentual: 18 },
  { estado: 'PI', percentual: 18 },
  { estado: 'RJ', percentual: 18 },
  { estado: 'RN', percentual: 18 },
  { estado: 'RS', percentual: 18 },
  { estado: 'RO', percentual: 17.5 },
  { estado: 'RR', percentual: 17 },
  { estado: 'SC', percentual: 17 },
  { estado: 'SP', percentual: 18 },
  { estado: 'SE', percentual: 18 },
  { estado: 'TO', percentual: 18 }
];

function App() {
  const [valorCarga, setValorCarga] = useState('');
  const [estadoSelecionado, setEstadoSelecionado] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularICMS = () => {
    const estado = icmsData.find(e => e.estado === estadoSelecionado);
    if (estado && valorCarga) {
      const percentual = estado.percentual;
      const icms = (parseFloat(valorCarga) * percentual) / 100;
      setResultado({ percentual, icms });
    } else {
      setResultado(null);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '700px', margin: '0 auto' }}>
      <h1>Tabela de ICMS por Estado - 2025</h1>

      <div style={{ marginBottom: '30px', marginTop: '20px' }}>
        <label>Valor da carga (R$): </label>
        <input
          type="number"
          value={valorCarga}
          onChange={(e) => setValorCarga(e.target.value)}
          style={{ padding: '8px', marginRight: '10px' }}
        />

        <label>Estado: </label>
        <select
          value={estadoSelecionado}
          onChange={(e) => setEstadoSelecionado(e.target.value)}
          style={{ padding: '8px', marginRight: '10px' }}
        >
          <option value="">Selecione</option>
          {icmsData.map((item) => (
            <option key={item.estado} value={item.estado}>
              {item.estado}
            </option>
          ))}
        </select>

        <button onClick={calcularICMS} style={{ padding: '8px 15px' }}>Calcular ICMS</button>
      </div>

      {resultado && (
        <div style={{ marginBottom: '30px', background: '#f9f9f9', padding: '15px', borderRadius: '8px' }}>
          <p><strong>Estado:</strong> {estadoSelecionado}</p>
          <p><strong>Percentual de ICMS:</strong> {resultado.percentual}%</p>
          <p><strong>Valor do ICMS:</strong> R$ {resultado.icms.toFixed(2)}</p>
        </div>
      )}

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={thStyle}>Estado</th>
            <th style={thStyle}>Percentual ICMS (%)</th>
          </tr>
        </thead>
        <tbody>
          {icmsData.map((item) => (
            <tr key={item.estado}>
              <td style={tdStyle}>{item.estado}</td>
              <td style={tdStyle}>{item.percentual}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  background: '#f0f0f0',
  textAlign: 'left'
};

const tdStyle = {
  border: '1px solid #ccc',
  padding: '10px'
};

export default App;
