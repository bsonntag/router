import { useRouter } from '../src';
import React from 'react';

const About = () => {
  const { goBack } = useRouter();

  return (
    <>
      <h1>About</h1>
      <button onClick={goBack}>Back</button>
    </>
  );
};

export default About;
