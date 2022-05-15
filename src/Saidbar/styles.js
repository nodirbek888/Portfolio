import styled from 'styled-components'
import {Work} from "@styled-icons/material/Work"
import {PermContactCalendar} from "@styled-icons/material/PermContactCalendar"
import {Blog} from "@styled-icons/fa-solid/Blog"
import {Home} from "@styled-icons/entypo/Home"
import {Code} from "@styled-icons/entypo/Code"
import  {FacebookCircle} from "@styled-icons/boxicons-logos/FacebookCircle"
import {Github} from "@styled-icons/boxicons-logos/Github"
import {InstagramWithCircle} from "@styled-icons/entypo-social/InstagramWithCircle"
export const Conatiner = styled.div`
  width: 7%;
  background: #181818;
  /* border-right: 1px solid #777; */
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  .top{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 230px;
    background-color: black;
  }
  .logo{
    width: 200px;
    height: 200px;
    cursor: pointer;
    /* background-color: white; */
  }
  .ps{
    font-family: sans-serif;
    /* color: #F75633; */
    background: linear-gradient(120deg , #C11081 ,#F43549, #F75633);
    font-size: 25px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    bottom: 50px;
  }
  .textweb{
    font-family: sans-serif;
    /* color: #F75633; */
    background: linear-gradient(120deg , #C11081 ,#F43549, #F75633);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    bottom: 50px;
  }
  .center{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
  }
  .bottom{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 50px;
    flex-direction: column;
  }
`
export const Homei = styled(Home)`
    /* background: linear-gradient(120deg , #C11081 ,#F43549, #F75633); */
    color:#F75633 ;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition-duration: 0.5s;
    :hover{
      color: #F43549 ;
    }
`

export const WorkL = styled(Work)`
    /* background: linear-gradient(120deg , #C11081 ,#F43549, #F75633); */
    color:#F75633 ;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition-duration: 0.5s;
    :hover{
      color: #F43549 ;
    }
`

export const Codei = styled(Code)`
    /* background: linear-gradient(120deg , #C11081 ,#F43549, #F75633); */
    color:#F75633 ;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition-duration: 0.5s;
    :hover{
      color: #F43549 ;
    }
`

export const Perm = styled(PermContactCalendar)`
    /* background: linear-gradient(120deg , #C11081 ,#F43549, #F75633); */
    color:#F75633 ;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition-duration: 0.5s;
    :hover{
      color: #F43549 ;
    }
`

export const Blogi = styled(Blog)`
    /* background: linear-gradient(120deg , #C11081 ,#F43549, #F75633); */
    color:#F75633 ;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition-duration: 0.5s;
    :hover{
      color: #F43549 ;
    }
`
export const Facebook = styled (FacebookCircle)`
    color:#F75633 ;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition-duration: 0.5s;
    :hover{
      color: #F43549 ;
    }
`
export const Git = styled (Github)`
    color:#F75633 ;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition-duration: 0.5s;
    :hover{
      color: #F43549 ;
    }
`
export const Inst = styled (InstagramWithCircle)`
     color:#F75633 ;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition-duration: 0.5s;
    :hover{
      color: #F43549 ;
    }
`