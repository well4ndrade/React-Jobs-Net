import React from 'react';
import Container from '@material-ui/core/Box';
import MiniDrawer from '../components/MenuComponent.js';
import VagasComponent from '../components/VagasComponent.js';

export default function VagasPage() {
  return (
    <div >
      <Container  >
      <MiniDrawer  corpo={<VagasComponent />} />
      </Container>
    </div>
  );
}