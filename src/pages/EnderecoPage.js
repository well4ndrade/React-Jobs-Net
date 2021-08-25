import React from 'react';
import Container from '@material-ui/core/Box';
import MiniDrawer from '../components/MenuComponent.js';
import EnderecoComponent from '../components/EnderecoComponent.js';

export default function EnderecoPage() {
  return (
    <div >
      <Container  >
        <MiniDrawer  corpo={<EnderecoComponent/>} />
      </Container>
    </div>
  );
}