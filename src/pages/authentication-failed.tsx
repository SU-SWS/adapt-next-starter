import React from 'react';
import { MainLayout, Paragraph } from '../components';

const AuthenticationFailedPage = () => (
  <MainLayout
    title="Authentication Error"
    contentWidth="inset"
  >
    <Paragraph variant="card" className="su-max-w-[75ch]">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum itaque facere adipisci,
      officiis hic eveniet et qui nisi maxime totam molestiae eius, nam quibusdam, vero beatae laudantium
      vitae! Corporis, nemo!
    </Paragraph>
  </MainLayout>
);

export default AuthenticationFailedPage;
