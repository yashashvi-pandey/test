import React,{useState} from 'react'
import HeaderComponent from '../Pages/Header';
import HomeComponent from '../Pages/Home'
import UpperBody from '../Pages/UpperBody'
import FooterComponent from '../Pages/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import TabComponent from '../Pages/TabComponent'

import InstaComponent from '../Components/Instagram'
import LogosComponent from '../Components/LogosComponent'
import RevealComponent from '../Components/RevealImage'
import ModalBox from '../Components/ModalBox'

const HomePageMain =()=>{
const [count, setCount] = useState(0);
const getData=(count)=>{
setCount(count)

}
return(console.log(count),
    <>
       <UpperBody />
     <HomeComponent />
     <TabComponent/>
     <RevealComponent/>
     <InstaComponent/>
     <LogosComponent/>
  <FooterComponent/>
    </>
)
}
export default HomePageMain