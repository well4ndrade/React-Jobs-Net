import React from 'react';
import Container from '@material-ui/core/Box';
import NavBar from '../components/navBarComponent.js';
import DadosPessoaisComponent from '../components/DadosPessoaisComponent.js';
export default function DadosPessoaisPage() {
  return (
    <div >
      <Container  >
        <NavBar  text={<DadosPessoaisComponent />} />
      </Container>
    </div>
  );
}