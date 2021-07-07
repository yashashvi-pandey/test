import React, { useEffect,useState } from 'react'
import { Segment,Image, Container,Grid, Header,Icon} from 'semantic-ui-react'
import ImageSlider from '../Components/ImageSlider'
import ImageComponent from '../Components/ImageComponent'
import faker from 'faker'
import HeaderGridComponent from '../Components/HomeComponents/HomeGridComponents'
import "./style.css";
import ModalBox from '../Components/ModalBox'
import HeaderComponent from '../Pages/Header';
import { useDispatch, useSelector } from 'react-redux'


const HomeComponent =(props)=>{


const countValue =useSelector(state =>state)


  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);


// useEffect hook which is call on update when any counter value change

const dispatch=useDispatch();
// const countValue =useSelector(state =>state)
console.log(countValue.count);
  // const timer1 = setTimeout(() => {
  //     setCount1(countValue.count1)
  //     setCount2(countValue.count2)
  //     setCount3(countValue.count3)
  //     setCount4(countValue.count4)
  //     
  //     }, 1);
  const handleCount1=(event)=>{
    setCount1(count1+1)
    console.log(event.keyCode); 
  }
  const handleCount2=()=>{
    setCount2(count2+1)
  }

  const handleCount3=()=>{
    setCount3(count3+1)
  }

  const handleCount4=()=>{
    setCount4(count4+1)
  }

  useEffect(() => {
    setShow(false);
    setCount(count1+count2+count3+count4);
    dispatch({type:"c1",payload:count});
 clearTimeout(timer)
   console.log(count,show);
  },[count1,count2,count3,count4]);
  const timer = setTimeout(() => {
    setShow(true);
 }, 2000);
// declear json array
  var itemsList = [
    { type:'count1', count:count1 , url: "https://multikart-react.vercel.app/assets/images/pro3/1.jpg",rating:'3', price: 25.00,name:'Black Jeans',handleCount:handleCount1 },
    { type:'count2', count:count2 ,url: "https://multikart-react.vercel.app/assets/images/pro3/2.jpg",rating:'4', price: 22.00,name:'Matelic Black Jeans',handleCount:handleCount2 },  
    { type:'count3' , count:count3 ,url: "https://multikart-react.vercel.app/assets/images/pro3/3.jpg",rating:'3', price: 15.00,name:'Gream Top',handleCount:handleCount3},
    { type:'count4' , count:count4, url: "https://multikart-react.vercel.app/assets/images/pro3/4.jpg",rating:'2', price: 74.00,name:'Women Jeans',handleCount:handleCount4 },
  ];
    return(
        <>{show ? <HeaderComponent Item={countValue.count} /> : <HeaderComponent />}
      
        {/* Image Slider */}
        <Segment style={{}} >
       <ImageSlider lable1="Welcome To Fashion" desc1="Men Fashion" lable2="Welcome To Fashion" desc2="Woman Fashion" Img1Url="https://multikart-react.vercel.app/assets/images/home-banner/1.jpg" Img2Url="https://multikart-react.vercel.app/assets/images/home-banner/2.jpg"/>
       <ModalBox/>
        </Segment>

{/* two Images */}
        <Container >
        <Grid columns={2} padded='vertically'>
      <Grid.Column ><Container>
        {/* <RevealComponent url1={faker.image.fashion()} url2={faker.image.nature()}/> */}
      <Image  size="massive"  src={faker.image.fashion()} fluid />
    </Container>
      </Grid.Column>
      <Grid.Column>
      <Container>
      <Image size="massive" src={faker.image.fashion()} fluid />
    </Container>
      </Grid.Column>
    </Grid>
 
        </Container>


       {/* Special Offer */}
        <Container > 
            <Header color="red" as="h2" textAlign='center'>Special Offer</Header>
            <Header as="h1" size="huge" textAlign='center'> TOP COLLECTION</Header>
           <Container>
          
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
   
           </Container>
        
        </Container>
      
      
      {/* 4 home Grid component */}
        <Segment style={{marginLeft:"10%",marginRight:"10%"}} >
        <Grid>
        <Grid.Row columns={4}>
        {itemsList.map((item) => (
          <> <Grid.Column>
          <HeaderGridComponent Click={item.click} count={item.count} type={item.type} url={item.url} handleCount={item.handleCount} rating={item.rating} price={item.price} name={item.name}/>
        </Grid.Column></>
       
      ))}
  
    </Grid.Row>

  
  </Grid>
        </Segment>
  
  {/* massive Image */}
        <Segment style={{height:'40%'}} >
        <ImageComponent ImageUrl='https://multikart-react.vercel.app/assets/images/parallax/1.jpg' />
        </Segment>

 
 {/*  */}
 <Segment style={{width:'100%'}}>
        <Container style={{marginTop:'4%'}}>
    
            <Header as="h1" size="huge">SPECIAL PRODUCTS</Header>
        </Container>
        
        {/*8 homw Gro  */}
        
        <Segment style={{marginLeft:"10%",marginRight:"10%"}}>
        <Grid relaxed columns={4} >
            <Grid.Row>
    <Grid.Column>
      <HeaderGridComponent url="https://multikart-react.vercel.app/assets/images/furniture/product/5.jpg" rating={2} price={122} name="Chair"/>
            
    </Grid.Column>
    <Grid.Column>
      <HeaderGridComponent url="https://multikart-react.vercel.app/assets/images/furniture/product/6.jpg" rating={3} price={144} name="Table"/>
            
    </Grid.Column>
    <Grid.Column>
      <HeaderGridComponent url="https://multikart-react.vercel.app/assets/images/furniture/product/7.jpg" rating={5} price={123} name="Lamp"/>
            
    </Grid.Column>
    <Grid.Column>
      <HeaderGridComponent url="https://multikart-react.vercel.app/assets/images/furniture/product/8.jpg" rating={3} price={100} name="Chair"/>
            
    </Grid.Column>
    </Grid.Row>
    <Grid.Row>
    <Grid.Column>
      <HeaderGridComponent url="https://multikart-react.vercel.app/assets/images/furniture/product/3.jpg" rating={2} price={200} name="Wooden Chair"/>
            
    </Grid.Column>
    <Grid.Column>
      <HeaderGridComponent url="https://multikart-react.vercel.app/assets/images/furniture/product/5.jpg" rating={1} price={200} name="Sofa"/>
            
    </Grid.Column>
    <Grid.Column>
      <HeaderGridComponent url="https://multikart-react.vercel.app/assets/images/furniture/product/8.jpg" rating={4} price={320} name="Chair"/>
 
            
    </Grid.Column>
    <Grid.Column>
      <HeaderGridComponent url="https://multikart-react.vercel.app/assets/images/furniture/product/9.jpg" rating={2} price={120} name="Chair"/>
            
    </Grid.Column>
    </Grid.Row>
  </Grid>

        </Segment>
        </Segment>
        <Segment.Group horizontal>
    <Segment> <Grid columns={4}>
    <Grid.Column/>

        <Grid.Column>
    <Icon size='huge' name='shipping fast' color="red" />
     
    </Grid.Column>
    <Grid.Column>
    <Header as="h4" color="red" >Free Shipping</Header>
    <Header as="h4" color="grey" >Free Shipping World Wide</Header>
    </Grid.Column>
    <Grid.Column/>
     
      </Grid>
     </Segment>
    <Segment> 
    <Grid columns='equal'>
    <Grid.Column/>

        <Grid.Column>
        <Icon  size='huge' name='clock outline'  color="red" />
     
    </Grid.Column>
    <Grid.Column width={8}>
    <Header as="h4" color="red" >24 X 7 SERVICE</Header>
    <Header as="h4" color="grey" >Online Service For New Customer</Header>
    </Grid.Column>
    <Grid.Column/>
     
      </Grid>
   
      </Segment>
    <Segment> 
    <Grid columns={4}>


        <Grid.Column>
        <Icon  size='huge' name='volume up'   color="red"/>
     
    </Grid.Column>
    <Grid.Column>
    <Header as="h4" color="red" >FESTIVAL OFFER</Header>
    <Header as="h4" color="grey" >New Online Special Festival Offer</Header>
    </Grid.Column>
    <Grid.Column/>
     
      </Grid>
   
     
      </Segment>
  </Segment.Group>

</>
    )
}
export default HomeComponent;