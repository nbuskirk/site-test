import React from 'react'
import {render} from 'react-dom'
export default class Bird extends React.Component {
  constructor(props){
    super(props);

  }
  sayHello(){
    console.log('hello');
  }
  render () {
    var style = {
      animation: 'animation: bob 0.7s infinite cubic-bezier(0.7, 0.7, 0.1, 0.4)',
      position: 'absolute',
      top: this.props.y*2+'px'
    }
    return (
      <div id="bird" onClick={this.sayHello()} style={style}>
        <div id="body2"></div>
        <div id="body1"></div>
        <div id="wing-l"></div>
        <div id="wing-r"></div>
      </div>
    )
  }
}
