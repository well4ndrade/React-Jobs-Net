import React from 'react';
import Container from '@material-ui/core/Box';
import NavBar from '../components/navBarComponent.js';
import CadastroComponent from '../components/CadastroComponent.js';
export default function CadastroPage() {
  return (
    <div >
      <Container  >
        <NavBar  text={<CadastroComponent />} />
      </Container>
    </div>
  );
}