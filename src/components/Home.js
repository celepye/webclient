import React, { Component } from 'react';

class Home extends Component {
  constructor(){
    super();
    this.parallaxArray = [5];
    for(let i = 0; i < 5; i++){
      this.parallaxArray[i] = React.createRef();
    }
    //this.state = {parallaxArray: this.parallaxArray};
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(e){
    /*for(let i = 0; i < 5; i++){
      this.parallaxArray[i].style = {transform: `translate3d(0px, ${i * 5}px, 0px)`};
    }*/
    console.log("hello world");
  }
  render() {
    return (
      <div id="homewrapper">
        <div id="home">
          <div className="parallax" ref={this.parallaxArray[0]}></div>
          <div className="parallax" ref={this.parallaxArray[1]}></div>
          <div className="parallax" ref={this.parallaxArray[2]}></div>
          <div className="parallax" ref={this.parallaxArray[3]}></div>
          <div className="parallax" ref={this.parallaxArray[4]}></div>
        </div>
      </div>
    );
  }
}

export default Home;
