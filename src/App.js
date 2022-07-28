import Banner from './components/Banner/banner';
import Lista from './components/Lista';
import Titulo from './components/Titulo';

function App() {

  const listas = [
    {
      nome: 'Celulares',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F2E9',
    },
    {
      nome: 'Consoles',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Jogos',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Camisas',
      corPrimaria: '#E06869',
      corSecundaria: '#FDE7E8',
    }
  ]

  return (
    <div className="App">
      <Banner />
      <Titulo />
      {listas.map(lista => <Lista key={lista.nome} nome={lista.nome} corPrimaria={lista.corPrimaria} corSecundaria={lista.corSecundaria}/>)}
    </div>
  );
}

export default App;
