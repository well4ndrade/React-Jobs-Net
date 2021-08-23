import React from 'react';
import Container from '@material-ui/core/Box';
import MiniDrawer from '../components/MenuComponent.js';
import CadastroComponent from '../components/CadastroComponent.js';
export default function CadastroPage() {
  return (
    <div >
      <Container  >
      <MiniDrawer  corpo={<CadastroComponent />} />
      </Container>
    </div>
  );
}