import React from 'react';
import './App.css';
import { Image } from './Image';

const IMAGES = {
  coronation: "./imgs/coronation.jpg",
  horseman: "./imgs/horseman.jpg",
  intervention: "./imgs/intervention.jpg",
  oath: "./imgs/oath.jpg",
  recamier: "./imgs/racamier.jpg"
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Image />
        <img src={IMAGES.coronation} />
      </div>
    );
  }
}

export default App;
