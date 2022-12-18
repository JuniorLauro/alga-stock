import React, { useState } from 'react';
import Button from '../../shared/Button';
import Container from '../../shared/Container';
import Input from '../../shared/Input';
import Header from '../Header/index';
import './App.css';

function TestComponent(){
  return <img width='15' src='https://cdn-icons-png.flaticon.com/512/64/64673.png'
  alt='Lupa'/>
}

function App() {
  const [street, setStreet] = useState('')

  return (
    <div className="App">
      <Header title='AlgaStock'/> 

      <Container>
        <ul>
          {  
            ['Daniel', 'Thiago', 'William', 'Daniel'].map((name, index) =>{ /**Do banco de dados, passaria seu id */
             return <li key={index}>
               {name}
             </li>
            })
          }
        </ul>
      </Container>
    </div>
  );
}

export default App;
