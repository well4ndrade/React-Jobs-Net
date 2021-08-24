import React from 'react';
import Container from '@material-ui/core/Box';
import MiniDrawer from '../components/MenuAdminComponent.js';
import HomeAdminComponent from '../components/HomeAdminComponent.js';
export default function HomePage() {
  return (
    <div >
      <Container  >
        <MiniDrawer  corpo={<HomeAdminComponent />} />
      </Container>
    </div>
  );
}