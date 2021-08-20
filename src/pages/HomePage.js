import React from 'react';
import Container from '@material-ui/core/Box';
import NavBar from '../components/navBarComponent.js';

import HomeComponent from '../components/HomeComponent.js';
export default function HomePage() {
  return (
    <div >
      <Container  >
        <NavBar  text={<HomeComponent />} />
      </Container>
    </div>
  );
}