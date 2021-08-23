import React from 'react';
import Container from '@material-ui/core/Box';
import MiniDrawer from '../components/MenuComponent.js';
import DadosPessoaisComponent from '../components/DadosPessoaisComponent.js';
export default function DadosPessoaisPage() {
  return (
    <div >
      <Container  >
      <MiniDrawer  corpo={<DadosPessoaisComponent />} />
      </Container>
    </div>
  );
}