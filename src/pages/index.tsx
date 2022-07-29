import React from 'react';
import {
  AuthenticatedPage, MainLayout,
} from '../components';
import { DirectorySearch } from '../components/DirectorySearch';

const Home = () => (
  <AuthenticatedPage>
    <MainLayout
      title="Directory"
      contentWidth="large"
      data-testid="home"
    >
      <DirectorySearch />
    </MainLayout>
  </AuthenticatedPage>
);
export default Home;
