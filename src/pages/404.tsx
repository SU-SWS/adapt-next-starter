import React from 'react';
import { MainLayout, Paragraph } from '../components';

const FourOhFour = () => (
  <MainLayout
    title="We can’t seem to find what you are looking for."
    headTitle="404 - Page Not Found"
    contentWidth="inset"
  >
    <Paragraph variant="card" className="su-max-w-[75ch]">
      This page does not exist.
    </Paragraph>
    <Paragraph variant="card" className="su-max-w-[75ch] su-mb-0">Error 404.</Paragraph>
  </MainLayout>
);

export default FourOhFour;
