import React, { Component } from 'react';

import {BackgroundVideo, Donate, BurgerMenu} from './components';

class App extends Component {
  render() {
    return (
      <div>
        <BurgerMenu />
        <Donate />
        <BackgroundVideo src="video/test-v.mp4" />
      </div>
    );
  }
}

export default App;
