import React from 'react';
import { MainLayout } from '../components';

const Home = () => (
  <MainLayout
    title="Next Starter"
    contentWidth="large"
    data-testid="home"
  >
    <p>Welcome to the ADAPT Next Starter!</p>
    <p>This starter includes the following</p>
    <ul>
      <li>Typescript</li>
      <li>React Redux</li>
      <li>Netlify Config</li>
      <li>Material UI v5</li>
      <li>Decanter v7</li>
      <li>Tailwind</li>
      <li>TW x MUI styling support</li>
      <li>Eslint</li>
    </ul>
  </MainLayout>
);
export default Home;
