import React from 'react'
import faker from 'faker'
import Carousel from 'react-bootstrap/Carousel'
import ImageComponent from './ImageComponent'
import { Label,Header } from 'semantic-ui-react'
import CorouselImage from './CorouselImage'

// 
const ImageSlider =(props)=>{
return(
    <>
          <Carousel>
    
{/* 
<CorouselImage  Img1Url='https://multikart-react.vercel.app/assets/images/home-banner/1.jpg'  desc1="First Page" lable1="First"/>
<CorouselImage Img1Url='https://multikart-react.vercel.app/assets/images/home-banner/2.jpg' desc1="First Page" lable1="Secon"/> */}


    <Carousel.Item interval={props.interval}>
<ImageComponent  className="d-block w-100"  ImageUrl={props.Img1Url}
      alt="First slide"/>
 <Carousel.Caption>
 <Header as='h4' color='black' style={{opcity:'.5'}}>{props.lable1}</Header>
 <Header as='h1'size='huge' >{props.desc1} </Header>
 </Carousel.Caption>
</Carousel.Item>
<Carousel.Item interval={props.interval}>
<ImageComponent  className="d-block w-100"  ImageUrl={props.Img2Url}
      alt="First slide"/>
 <Carousel.Caption>
 <Header as='h4' color='black' style={{opcity:'.5'}}>{props.lable2}</Header>
   <Header as='h1' size='huge'>{props.desc2}</Header>
 </Carousel.Caption>
</Carousel.Item>
</Carousel>
    </>
)
}
export default ImageSlider