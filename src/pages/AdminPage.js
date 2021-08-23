import React from 'react';
import Container from '@material-ui/core/Box';
import MiniDrawer from '../components/MenuComponent.js';
import AdminComponent from '../components/AdminComponent.js';
export default function AdminPage() {
  return (
    <div >
      <Container  >
        <MiniDrawer  corpo={<AdminComponent />} />
      </Container>
    </div>
  );
}