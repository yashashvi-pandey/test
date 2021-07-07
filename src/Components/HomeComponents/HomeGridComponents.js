import React,{useEffect,useState} from 'react'
import ImageComponent from '../ImageComponent'
import {Container, Header,Rating,Button} from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'


const HomeGridComponent =(props)=>{

    const [show, setShow] = useState(false);
    // const [count, setCount] = useState(0);
    const [count, setCount] = useState({
c1:0,
c2:0,
c3:0,
c4:0,

    });
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);

    const [allValues, setAllValues] = useState({
      c1:0,
      c2:0,
      c3:0,
      c4:0
     });


    // const dispatch=useDispatch();
    // const countValue =useSelector(state =>state)
    // const handleCount = () => {
    //     // dispatch({type:props.type});

    //   console.log(count);
    //     console.log("clicked");
    //     if(props.type=='count1'){
           
    //         dispatch({type:"c1",name:'c1'});

    //     }
    //     if(props.type=='count2'){
  
    //             dispatch({type:"c2",name:'c2'});
    //     }
    //     if(props.type=='count3'){
     
    //             dispatch({type:"c3",name:'c3'});

    //     }
    //     if(props.type=='count4'){
           
    //             dispatch({type:"c4",name:'c4'});
       
    //     }
       
       

      // } 
   

      // const timer1 = setTimeout(() => {
      //   dispatch({type:"SetGlobal",payload:count,count1:count1,count2:count2,count3:count3,count4:count4});
        
      // }, 1);

      // useEffect(() => {
      //   setShow(false) //here we set show value false and after 3 sec its value up
      //   const timer = setTimeout(() => {
      //     // setShow(true);
      //     setCount(count1+count2+count3+count4);
      //     // dispatch({type:"INCREMENT",payload:count});
      //     console.log(countValue);
      //   }, 2000);
      
      // }, [count1,count2,count3,count4]);
    
     
    return(
        <><Container textAlign='left'>
        <ImageComponent ImageUrl={props.url} />
              <Rating icon='star' defaultRating={props.rating} maxRating={5} />
      <Header color="red" as="h2">{props.name}</Header>
            <Header as="h1" size="huge">${props.price}</Header>
            <Header as="h5" >Item In Cart:{props.count}</Header>
            <Header/>
            </Container>
            <Button icon='add' color='orange' onClick={props.handleCount} label="Add To Cart"></Button>
        </>
    )
}
export default HomeGridComponent