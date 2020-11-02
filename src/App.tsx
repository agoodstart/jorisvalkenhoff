import React from 'react';
import './sass/main.scss';
import {IntroSection} from './tsx/introsection';
import {Logo} from './tsx/components/logo';

const App: React.FC = () => {
  return (
    <section className="App">
      <Logo />
      <IntroSection />
    </section>
  )
}

export default App; 