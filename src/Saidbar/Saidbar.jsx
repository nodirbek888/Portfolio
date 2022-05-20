import React, {useState} from "react";
import {Conatiner,WorkL ,Codei,Perm,Blogi,Homei,Facebook,Git,Inst} from './styles'
import logo from '../Rasmlar/logo.png'
import Bounce from 'react-reveal/Bounce';
// import Home from '../Homes/Home'
import { SlideMultipleArrowRightDimensions } from "@styled-icons/fluentui-system-filled/SlideMultipleArrowRight";
export const Saidbar = ()=> {
  const [pages, setPages] = useState('homed')
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
          <Homei onClick={()=> setPages('homed')}/>
          {/* {pages === 'homed' && <Home/>} */}
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
export default Saidbar