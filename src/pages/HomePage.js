import React from 'react';
import Container from '@material-ui/core/Box';
import MiniDrawer from '../components/MenuComponent.js';

import HomeComponent from '../components/HomeComponent.js';
export default function HomePage() {
  return (
    <div >
      <Container  >
        <MiniDrawer  corpo={<HomeComponent />} />
      </Container>
    </div>
  );
}