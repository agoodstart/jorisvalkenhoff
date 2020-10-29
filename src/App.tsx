import React from 'react';
import './sass/main.scss';
import {Intro} from './text';
import {IntroSection} from './tsx/section-intro';

const App: React.FC = () => {
  return (
    <IntroSection text="hello" />
  )
}
export default App;
