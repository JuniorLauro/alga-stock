import Container from '../../shared/Container';
import Table from '../../shared/Table';
import Header from '../Header/index';
import './App.css';

function App() {

  return (
    <div className="App">
      <Header title='AlgaStock'/> 
      <Container>
       <Table/>
      </Container>
    </div>
  );
}

export default App;
