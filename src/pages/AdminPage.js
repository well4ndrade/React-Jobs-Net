import React from 'react';
import Container from '@material-ui/core/Box';
import NavBar from '../components/navBarComponent.js';
import AdminComponent from '../components/AdminComponent.js';
export default function AdminPage() {
  return (
    <div >
      <Container  >
        <NavBar  text={<AdminComponent />} />
      </Container>
    </div>
  );
}