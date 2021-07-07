
import React from 'react'
import { Search, Grid, Header, Segment,Container } from 'semantic-ui-react'
import HeaderComponent from '../Pages/Header';
import UpperBody from '../Pages/UpperBody'
import FooterComponent from '../Pages/Footer'


const SettingPage=()=> {
return(
    <>
<UpperBody />
      <HeaderComponent />
      <Container style={{height:'100%',marginBottom:'30%'}}>
      <Header as='h1' textAlign='center'>Setting Page</Header>

      </Container>
   
  
  <FooterComponent position='absolute'/>
    </>
)
}

export default SettingPage