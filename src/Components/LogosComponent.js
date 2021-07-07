import React from 'react'

import {Grid,Image,Header, Container,Segment} from 'semantic-ui-react'

const InstaComponent=(props)=>{
    return(
        <>
  
<Grid >
<Segment  style={{width:'100%',marginTop:'2%',marginBottom:'2%' }}>
<Grid.Row><Image size='small' style={{opacity:'0.5' ,marginLeft:'12%'}} src='https://multikart-react.vercel.app/assets/images/logos/1.png' />
  <Image style={{marginLeft:'5%' ,opacity:'0.5' }} size='small' src='https://multikart-react.vercel.app/assets/images/logos/2.png' />
  <Image style={{marginLeft:'5%' ,opacity:'0.5' }} size='small' src='https://multikart-react.vercel.app/assets/images/logos/3.png' />
  <Image style={{marginLeft:'5%' ,opacity:'0.5' }} size='small' src='https://multikart-react.vercel.app/assets/images/logos/4.png' />
  <Image style={{marginLeft:'5%' ,opacity:'0.5' }} size='small' src='https://multikart-react.vercel.app/assets/images/logos/5.png' />
  <Image style={{marginLeft:'5%' ,opacity:'0.5' }} size='small' src='https://multikart-react.vercel.app/assets/images/logos/6.png' />

</Grid.Row>
  </Segment>


</Grid>
</>
)
}
export default InstaComponent