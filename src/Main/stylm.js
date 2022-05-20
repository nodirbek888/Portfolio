import styled from 'styled-components'
export const Conatiner = styled.div`
  width: 93%;
  background: #1D1D1D;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-left: 70px;
  flex-direction: column;
  margin-left: 7%;
  .dew{
    font-size: 50px;
    font-family: sans-serif;
    color: white
  }
  .text{
    display: flex;
  }
  .logo{
    margin: 15px 5px 0px 20px;
    width: 80px;
    height: 80px;
  }
  .hovers{
    color: white;
    transition-duration: 0.5s;
    :hover{
      color:#F75633 ;
    }
  }
  .hs{
    width: 30px;
  }
  .fron{
    font-size: 20px;
    font-family: sans-serif;
    color: #787878;
    margin-top: 30px;
  }
  .buttons{
    margin-top: 60px;
    width: 250px;
    padding: 20px;
    border: 1px solid #F75633;
    background: none;
    color: #F75633;
    font-size: 20px;
    cursor: pointer;
    transition-duration: 2s;
    outline: none;
    :hover{
      background: linear-gradient(120deg , #C11081 ,#F43549, #F75633);
      color: #1D1D1D;
      border: 1px solid  #1D1D1D;
    }
  }
  .positonlogo{
    position: absolute;
    top: 30px;
    left: 1600px;
  }
  .positonleft{
    position: absolute;
    top: 100px;
    left: 1775px;
    cursor: pointer;
  }
  .teghtml{
    position: absolute;
    top: 30px;
    right: 1700px;
    color: #505051;
    font-size: 30px;
    font-family: 'Dancing Script', cursive;
    :before{
      content: '<html>';
    }
  }
  .teghtmll{
    /* position: absolute;
    top: 900px; */
    /* right: 1690px; */
    color: #505051;
    font-size: 30px;
    font-family: 'Dancing Script', cursive;
    :before{
      content: '</html>';
    }
  }
  .tegbody{
    /* position: absolute;
    top: 100px;
    right: 1650px; */
    margin-bottom: 100PX;
    color: #505051;
    font-size: 30px;
    font-family: 'Dancing Script', cursive;
    :before{
      content: '<body>';
    }
  }

  .tegbodyy{
    position: absolute;
    top: 810px;
    right: 1650px;
    color: #505051;
    font-size: 30px;
    font-family: 'Dancing Script', cursive;
    :before{
      content: '</body>';
    }
  }
  .tegh{
    /* position: absolute;
    top: 180px;
    right: 1670px; */
    margin-bottom: 10px;
    margin-left: 20px;
    color: #505051;
    font-size: 27px;
    font-family: 'Dancing Script', cursive;
    :before{
      content: '<h1>';
    }
  }
  .teghh{
    /* position: absolute;
    top: 530px;
    right: 950px; */
    margin-left: 20px;
    margin-top: 100px;
    color: #505051;
    font-size: 27px;
    font-family: 'Dancing Script', cursive;
    :before{
      content: '</h1>';
    }
  }
  .tegp{
    /* position: absolute;
    top:560px; */
    color: #505051;
    font-size: 29px;
    margin-left: 10px;
    font-family: 'Dancing Script', cursive;
    :before{
      content: '<p>';
    }
  }
  .tegpp{
    /* position: absolute;
    top:630px; */
    color: #505051;
    font-size: 24px;
    margin-left: 400px;
    font-family: 'Dancing Script', cursive;
    :before{
      content: '</p>';
    }
  }
`
