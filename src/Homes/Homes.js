import styled from 'styled-components'

export const Conatiner = styled.div`
  background-color:  #1D1D1D;
  width: 93%;
  height: 100vh;
  display: flex;
  align-items: center;
  padding-left: 70px;
  margin-left: 7%;
  .box1{
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .paragrf{
    display: flex;
    flex-direction: column;
  }
  .harf{
    display: flex;
  }
  .hov{
    font-family: sans-serif;
    font-weight: 600;
    font-size: 90px;
    color: white;
    transition-duration: 0.5s;
    :hover{
      color: #F75633;
    }
  }
  .text{
    width: 800px;
    p{
      font-family: 'Prompt', sans-serif;
      color: white;
      font-size: 20px;
      background: linear-gradient(120deg , #C11081 ,#F43549, #F75633);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }
  }
`