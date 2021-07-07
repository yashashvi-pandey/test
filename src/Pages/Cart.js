import React from 'react'
import HeaderGridComponent from '../Components/HomeComponents/HomeGridComponents'
import { Segment,Image, Container,Grid, Header,Rating,Icon, Step } from 'semantic-ui-react'
import HeaderComponent from '../Pages/Header';
import HomeComponent from '../Pages/Home'
import UpperBody from '../Pages/UpperBody'
import FooterComponent from '../Pages/Footer'

const CartPage =()=>{
return(
    <>
    <UpperBody />
      <HeaderComponent />
    
        <Segment style={{marginLeft:"10%",marginRight:"10%"}} >
        <Grid>
    <Grid.Row columns={4}>
      <Grid.Column>
        <HeaderGridComponent url="https://multikart-react.vercel.app/assets/images/pro3/1.jpg" rating={2} price={122} name="Black Jeans"/>
      </Grid.Column>
      <Grid.Column>
        <HeaderGridComponent url="https://multikart-react.vercel.app/assets/images/pro3/2.jpg" rating={3} price={120} name="Matelic Black Jeans"/>
      </Grid.Column>
      <Grid.Column>
        <HeaderGridComponent url="https://multikart-react.vercel.app/assets/images/pro3/3.jpg" rating={5} price={150} name="Gream Top"/>
      </Grid.Column>
      <Grid.Column>
        <HeaderGridComponent url="https://multikart-react.vercel.app/assets/images/pro3/4.jpg" rating={3} price={180} name="Women Jeans"/>
      </Grid.Column>
    </Grid.Row>

  </Grid>
        </Segment>
  
    
   
  <FooterComponent/>
  
   </>
)

}
export default CartPage