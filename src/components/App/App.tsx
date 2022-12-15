import React from 'react';
import Button from '../Button';
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

      <div className="Container">
        <Button
          onCLick={() => window.alert('teste de alerta')}
          appendIcon={<TestComponent />}
        >
          Alert
        </Button>
      </div>
    </div>
  );
}

export default App;
