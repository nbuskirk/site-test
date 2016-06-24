import React from 'react'
import {render} from 'react-dom'
export default class TextBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active:this.props.active,
      currentText: this.props.active=='true' ? '' : this.props.text
    }
    if(this.props.active=='true'){
      this.addTimer();
    }
  }
  addTimer(){
    var _this = this;
    var timer = setInterval(function(){
      if(this.state.currentText.length==this.props.text.length){
        clearInterval(this);
        this.setState({
          active: false
        })
      }else {
        this.setState({
          currentText: this.props.text.substr(0,this.state.currentText.length+1)
        })
      }
    }.bind(this),this.props.speed)
  }
  render () {

    return (
          <h1>{this.state.currentText}</h1>
    )
  }
}
