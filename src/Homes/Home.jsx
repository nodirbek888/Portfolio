import React, {useState} from "react";
import Right from '../Rasmlar/right.PNG'
import Bounce from 'react-reveal/Bounce';
import RubberBand from 'react-reveal/RubberBand';
import {Conatiner} from './Homes'
const Home = ()=>{
  return(
  <Conatiner>
    <div className="box1">
      <div className="paragrf">
        <div className="harf">
          <RubberBand>
          <h1 className="hov">S</h1>
          </RubberBand>
          <RubberBand>
          <h1 className="hov">k</h1>
          </RubberBand>
          <RubberBand>
          <h1 className="hov">i</h1>
          </RubberBand>
          <RubberBand>
          <h1 className="hov">l</h1>
          </RubberBand>
          <RubberBand>
          <h1 className="hov">l</h1>
          </RubberBand>
          <RubberBand>
          <h1 className="hov">s</h1>
          </RubberBand>
          <RubberBand>
          <h1 className="hov">&</h1>
          </RubberBand>
        </div>
        <div className="harf">
        <RubberBand>
          <h1 className="hov">E</h1>
        </RubberBand>
        <RubberBand>
          <h1 className="hov">x</h1>
        </RubberBand>
        <RubberBand>
          <h1 className="hov">p</h1>
        </RubberBand>
        <RubberBand>
          <h1 className="hov">e</h1>
        </RubberBand>
        <RubberBand>
          <h1 className="hov">r</h1>
        </RubberBand>
        <RubberBand>
          <h1 className="hov">i</h1>
        </RubberBand>
        <RubberBand>
          <h1 className="hov">e</h1>
        </RubberBand>
        <RubberBand>
          <h1 className="hov">n</h1>
        </RubberBand>
        <RubberBand>
          <h1 className="hov">c</h1>
        </RubberBand>
        <RubberBand>
          <h1 className="hov">e</h1>
        </RubberBand>
        </div>
      </div>
      <div className="text">
        <Bounce left>
        <p>Taxminan 10 yil oldin mustaqil dasturchi sifatida sayohatimni boshlaganimdan beri men agentliklar uchun masofaviy ish qildim, startaplar bilan maslahatlashdim va biznes va iste'molchi foydalanish uchun veb-mahsulotlar yaratish uchun iqtidorli odamlar bilan hamkorlik qildim.
          Men tezkor, ishlatish uchun qulay va eng yaxshi tajribalar asosida yaratilgan muvaffaqiyatli javob beruvchi veb-saytlarni yarataman. Mening tajribamning asosiy sohasi - bu front-end ishlab chiqish, HTML, CSS, JS, kichik va o'rta veb-ilovalarni yaratish, maxsus plaginlar, xususiyatlar, animatsiyalar va interaktiv maketlarni kodlash.
          Bundan tashqari, menda mashhur ochiq manbali CMS (WordPress, Drupal, Magento, Keystone.js va boshqalar) bilan to'liq stekli dasturchi tajribasi bor.
          Batafsil ma'lumot olish uchun LinkedIn profilimga tashrif buyuring yoki shunchaki men bilan bog'laning .
        </p>
        </Bounce>
      </div>
    </div>
    <Bounce right>
    <div className="box2">
      <img src={Right}/>
    </div>
    </Bounce>
  </Conatiner>
  )
} 
export default Home 