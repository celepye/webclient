import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Header extends Component {
  constructor(props){
    super(props);
    this.state = {breadcrumbs: []};
  }
  componentDidMount(){
    let patharray = this.props.location.pathname.split('/');
    this.setState({breadcrumbs: patharray});
  }
  componentDidUpdate(prevProps){
    if(this.props.location.pathname !== prevProps.location.pathname){
      let patharray = this.props.location.pathname.split('/');
      this.setState({breadcrumbs: patharray});
    }
  }
  render() {
    for (let i = 0; i < this.state.breadcrumbs.length; i++){
      if(this.state.breadcrumbs[i] !== ""){
        /*let test = "";
        for (let i2 = 0; i2 < i; i--){
          //test += this.state.breadcrumbs[i];
          console.log("aaa");
        }*/
        console.log(this.state.breadcrumbs[i]);
      }
    }
    return (
      <div id="header">
        <div id="shimapanempty"></div>
        <div id="shimapanblue">
        </div>
        <div id="shimapanlightblue"></div>
        <div id="shimapanwhite"></div>
      </div>
    );
  }
}

export default Header;
