import React from 'react';
import './sass/main.scss';
import {IntroSection} from './tsx/introsection';

const App: React.FC = () => {
  return (
    <section className="App">
      <IntroSection />
    </section>
  )
}

export default App; 