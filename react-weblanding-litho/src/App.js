import './App.css';
import MainBanner from './Inicio/MainBanner';
import Experience from './Inicio/Experience';
import TableComponent from './Inicio/tabla';

function App() {
  return (
    <div className="App">
        <MainBanner />
        <Experience/>
        <TableComponent/>
    </div>
  );
}

export default App;
