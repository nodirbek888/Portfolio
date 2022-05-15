import React, {Component} from "react";
import {Conatiner,WorkL ,Codei,Perm,Blogi,Homei,Facebook,Git,Inst} from './styles'
import logo from '../Rasmlar/logo.png'
import Bounce from 'react-reveal/Bounce';
export default class Saidbar extends Component {
  render(){
    return(
      <Conatiner>
        <div className="top">
          <Bounce>
          <img className="logo" src={logo}/>
          </Bounce>
          <Bounce>
          <h1 className="ps">Nodirbek</h1>
          <p className="textweb">Web developer</p>
          </Bounce>
        </div>
        <div className="center">
        <Bounce>
            <Homei/>
          </Bounce>
          <Bounce >
            <Codei/>
          </Bounce>
          <Bounce>
          <WorkL/>
          </Bounce>
          <Bounce>
            <Perm/>
          </Bounce>
          <Bounce>
            <Blogi/>
          </Bounce>
        </div>
        <div className="bottom">
          <Bounce>
            <Facebook/>
          </Bounce>
          <Bounce>
            <Git/>
          </Bounce>
          <Bounce>
            <Inst/>
          </Bounce>
        </div>
      </Conatiner>
    )
  }
}