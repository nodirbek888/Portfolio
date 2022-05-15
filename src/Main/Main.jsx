import React,{Component} from "react";
import {Conatiner ,Tegs} from './stylm'
import logo from '../Rasmlar/logo.png'
import rasmleft from '../Rasmlar/rasmleft.png'
import left from '../Rasmlar/left.png'
import Bounce from 'react-reveal/Bounce';
import RubberBand from 'react-reveal/RubberBand';
export default class Main extends Component {
  render() {
    return(
      <Conatiner>
        <div className='top'>
          <div className='dew'>
            <div className='text'>
              <RubberBand>
            <h1 className="hovers">H</h1>
              </RubberBand>
              <RubberBand>
            <h1 className="hovers">i</h1>
              </RubberBand>
              <RubberBand>
            <h1 className="hovers">,</h1>
              </RubberBand>
            </div>
            <div className="text">
              <RubberBand>
              <h1 className="hovers">I</h1>
              </RubberBand>
              <RubberBand>
              <h1 className="hovers">m</h1>
              </RubberBand>
              <RubberBand>
              <h1 className="hovers">'</h1>
              </RubberBand>
              <Bounce top>
              <img className='logo' src={logo}/>   
              </Bounce>
              <RubberBand>
              <h1 className="hh"></h1>
              </RubberBand>
              <RubberBand>
              <h1 className="hovers">o</h1>
              </RubberBand>
              <RubberBand>
              <h1 className="hovers">d</h1>
              </RubberBand>
              <RubberBand>
              <h1 className="hovers">i</h1>
              </RubberBand>
              <RubberBand>
              <h1 className="hovers">r</h1>
              </RubberBand>
              <RubberBand>
              <h1 className="hovers">b</h1>
              </RubberBand>
              <RubberBand>
              <h1 className="hovers">e</h1>
              </RubberBand>
              <RubberBand>
              <h1 className="hovers">k</h1>
              </RubberBand>
              <RubberBand>
              <h1 className="hovers">,</h1>
              </RubberBand>
            </div>
            <div className="text">
            <RubberBand>
              <h1 className="hovers">w</h1>
            </RubberBand>
            <RubberBand>
              <h1 className="hovers">e</h1>
            </RubberBand>
            <RubberBand>
              <h1 className="hovers">b</h1>
            </RubberBand>
            <RubberBand>
              <h1 className="hs"></h1>
            </RubberBand>
            <RubberBand>
              <h1 className="hovers">d</h1>
            </RubberBand>
            <RubberBand>
              <h1 className="hovers">e</h1>
            </RubberBand>
            <RubberBand>
              <h1 className="hovers">w</h1>
            </RubberBand>
            <RubberBand>
              <h1 className="hovers">e</h1>
            </RubberBand>
            <RubberBand>
              <h1 className="hovers">l</h1>
            </RubberBand>
            <RubberBand>
              <h1 className="hovers">o</h1>
            </RubberBand>
            <RubberBand>
              <h1 className="hovers">p</h1>
            </RubberBand>
            <RubberBand>
              <h1 className="hovers">e</h1>
            </RubberBand>
            <RubberBand>
              <h1 className="hovers">r</h1>
            </RubberBand>
            </div>
            <div>
              <p className='teghtml'></p>
              <p className='teghtmll'></p>
              <p className='tegbody'></p>
              <p className='tegbodyy'></p>
              <p className='tegh'></p>
              <p className='teghh'></p>
              <p className='tegp'></p>
              <p className='tegpp'></p>
            </div>
          </div>
          <p className="fron">Front End Developer / WordPres Expert</p>
          <Bounce bottom>
          <button className="buttons">Contact me</button>
          </Bounce>
        </div>
        <div className='left'>
          <img className="positonlogo" src={rasmleft}/>
          <img className="positonleft" src={left}/>
        </div>
      </Conatiner>
    )
  }
}