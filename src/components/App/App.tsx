import React from 'react';
import Button from '../../shared/Button';
import Container from '../../shared/Container';
import Header from '../Header/index';
import './App.css';

function TestComponent(){
  return <img width='15' src='https://cdn-icons-png.flaticon.com/512/64/64673.png'
  alt='Cubo Mágico'/>
}

function App() {
  return (
    <div className="App">
      <Header title='AlgaStock'/> 

      <Container>      
        <Button
          onCLick={() => window.alert('teste de alerta')}
          appendIcon={<TestComponent />}
        >
          Alert
        </Button>
      </Container>
    </div>
  );
}

export default App;
