import React from 'react';
import Container from '@material-ui/core/Box';
import NavBar from '../components/navBarComponent.js';


import EnderecoComponent from '../components/EnderecoComponent.js';
export default function EnderecoPage() {
  return (
    <div >
      <Container  >
        <NavBar  text={<EnderecoComponent/>} />
      </Container>
    </div>
  );
}