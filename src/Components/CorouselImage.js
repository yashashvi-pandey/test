import React from 'react'

import ImageComponent from './ImageComponent'
import { Label,Header } from 'semantic-ui-react'
import faker from 'faker'
import Carousel from 'react-bootstrap/Carousel'


const ImageSlider =(props)=>{
return(  
<>
<Carousel.Item interval={props.interval}>
<ImageComponent  className="d-block w-100"  ImageUrl={props.Img1Url}
      alt="First slide"/>
 <Carousel.Caption>
 <Header as='h4' color='black' style={{opcity:'.5'}}>{props.lable1}</Header>
 <Header as='h1'size='huge' >{props.desc1} </Header>
 </Carousel.Caption>
</Carousel.Item>
</>    
)
}
export default ImageSlider