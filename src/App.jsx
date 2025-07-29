import './App.css';

function App() {
  const estados = [
    { estado: 'AC', icms: 17 },
    { estado: 'AL', icms: 18 },
    { estado: 'AM', icms: 18 },
    { estado: 'AP', icms: 18 },
    { estado: 'BA', icms: 18 },
    { estado: 'CE', icms: 18 },
    { estado: 'DF', icms: 18 },
    { estado: 'ES', icms: 17 },
    { estado: 'GO', icms: 17 },
    { estado: 'MA', icms: 18 },
    { estado: 'MT', icms: 17 },
    { estado: 'MS', icms: 17 },
    { estado: 'MG', icms: 18 },
    { estado: 'PA', icms: 17 },
    { estado: 'PB', icms: 18 },
    { estado: 'PR', icms: 18 },
    { estado: 'PE', icms: 18 },
    { estado: 'PI', icms: 18 },
    { estado: 'RJ', icms: 18 },
    { estado: 'RN', icms: 18 },
    { estado: 'RS', icms: 18 },
    { estado: 'RO', icms: 17 },
    { estado: 'RR', icms: 17 },
    { estado: 'SC', icms: 17 },
    { estado: 'SP', icms: 18 },
    { estado: 'SE', icms: 18 },
    { estado: 'TO', icms: 18 },
  ];

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Tabela de ICMS por Estado - 2025</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Estado</th>
            <th>ICMS (%)</th>
          </tr>
        </thead>
        <tbody>
          {estados.map((item) => (
            <tr key={item.estado}>
              <td>{item.estado}</td>
              <td>{item.icms}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
