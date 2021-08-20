import React from 'react';
import Container from '@material-ui/core/Box';
import NavBar from '../components/navBarComponent.js';

import LoginComponent from '../components/LoginComponent.js';
export default function LoginPage() {
  return (
    <div >
      <Container  >
        <NavBar  text={<LoginComponent />} />
      </Container>
    </div>
  );
}