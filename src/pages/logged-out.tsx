import React from 'react';
import { MainLayout, Paragraph } from '../components';

const LoggedOut = () => (
  <MainLayout
    title="You have logged out."
    headTitle="Logged Out"
    contentWidth="inset"
  >
    <Paragraph variant="card" className="su-max-w-[75ch]">
      You have successfully logged out of the Directory website.
    </Paragraph>
  </MainLayout>
);

export default LoggedOut;
