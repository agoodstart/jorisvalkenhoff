import React from 'react';
import './sass/main.scss';
import {IntroSection} from './tsx/introsection';
import {Logo} from './tsx/components/logo';
import {Navbar} from './tsx/components/navbar';
const App: React.FC = () => {
  return (
    <section className="App">
      <Logo />

      <Navbar />
      <IntroSection />
    </section>
  )
}

export default App; 