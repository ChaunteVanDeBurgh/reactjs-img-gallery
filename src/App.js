import React from 'react';
import './App.css';
import { Image } from './Image';
import { Menu } from './Menu';

const IMAGES = {
  coronation: "./imgs/coronation.jpg",
  horseman: "./imgs/horseman.jpg",
  intervention: "./imgs/intervention.jpg",
  oath: "./imgs/oath.jpg",
  recamier: "./imgs/racamier.jpg"
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.chooseImage = this.chooseImage.bind(this);
    this.state = { src: IMAGES.coronation }
  }
  chooseImage(newImage) {
    this.setState({
      src: IMAGES[newImage]
    });
  }
  render() {
    return (
      <div className="App">
        <Image src={this.state.src} />
        <Menu chooseImage={this.chooseImage} />
        <img src={IMAGES.coronation} />
      </div>
    );
  }
}

export default App;
