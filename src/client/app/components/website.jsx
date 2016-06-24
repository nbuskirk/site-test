import React from 'react'
import {render} from 'react-dom'
import TextBox from '../components/textbox.jsx'

export default class Website extends React.Component{
  constructor(props){
    super(props); //only if extending an element
    document.querySelector('.site-wrapper').classList.remove('ElementEnter');
    document.querySelector('.site-wrapper').classList.add('ElementEnter');
    document.querySelector('p.debugging').innerHTML = '~/nathan$ const website = new Website()'
  }
}
/* Set some initial properties on our box */
TextBox.defaultProps = { active:'true' }

/* Render the React widget to the appNode */
var appNode = document.querySelector('.twitterBox')
render(<div><TextBox text="Hello. I am a talking React widget!" speed="150"/></div>, appNode)
