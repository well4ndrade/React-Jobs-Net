import React from 'react';
import Container from '@material-ui/core/Box';
import MiniDrawer from '../components/MenuComponent.js';
import CargosComponent from '../components/CargosComponent.js';

export default function CargosPage() {
  return (
    <div >
      <Container  >
        <MiniDrawer corpo={<CargosComponent />} />
      </Container>
    </div>
  );
}