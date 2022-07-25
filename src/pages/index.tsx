import React from 'react';

// styles
const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};

// markup
const IndexPage = () => (
  <main style={pageStyles}>
    <h1 style={headingStyles}>Adapt Next Starter</h1>
    <p style={paragraphStyles}>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Nullam vel sem. Maecenas vestibulum mollis diam. Donec quam felis, ultricies nec,
      pellentesque eu, pretium quis, sem. Aenean leo ligula, porttitor eu, consequat vitae,
      eleifend ac, enim.
    </p>
  </main>
);

export default IndexPage;
