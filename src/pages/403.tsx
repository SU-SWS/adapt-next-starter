import React from 'react';
import { MainLayout, Paragraph } from '../components';

const FourOhThree = () => (
  <MainLayout
    title="Sorry, no access here"
    headTitle="403 - Access Denied"
    contentWidth="inset"
  >
    <Paragraph variant="card" className="su-max-w-[75ch]">
      It appears you do not have permission to view this page.
    </Paragraph>
    <Paragraph variant="card" className="su-max-w-[75ch] su-mb-0">Error 403.</Paragraph>
  </MainLayout>
);

export default FourOhThree;
