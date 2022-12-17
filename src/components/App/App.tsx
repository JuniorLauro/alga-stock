import React, { useState } from 'react';
import Button from '../../shared/Button';
import Container from '../../shared/Container';
import Input from '../../shared/Input';
import Header from '../Header/index';
import './App.css';

function TestComponent(){
  return <img width='15' src='https://cdn-icons-png.flaticon.com/512/64/64673.png'
  alt='Cubo Mágico'/>
}

function App() {
  const [street, setStreet] = useState('')

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
        <Input 
          label='Street'
          placeholder='E.g.: 15h Avenue'
          value={street}
          onChange={e => setStreet(e.target.value)}
        />
      </Container>
    </div>
  );
}

export default App;
