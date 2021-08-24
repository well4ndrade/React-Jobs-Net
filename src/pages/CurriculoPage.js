import React from 'react';
import Container from '@material-ui/core/Box';
import MiniDrawer from '../components/MenuComponent.js';
import CurriculoComponent from '../components/CurriculoComponent.js';

export default function CurriculoPage() {
  return (
    <div >
      <Container  >
      <MiniDrawer  corpo={<CurriculoComponent />} />
      </Container>
    </div>
  );
}