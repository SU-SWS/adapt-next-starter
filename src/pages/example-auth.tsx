import React from 'react';
import {
  AuthenticatedPage, MainLayout,
} from '../components';

const Home = () => (
  <AuthenticatedPage>
    <MainLayout
      title="Example Auth"
      contentWidth="large"
      data-testid="example-auth"
    >
      <p>Welcome to the page behind authentication</p>
    </MainLayout>
  </AuthenticatedPage>
);
export default Home;
