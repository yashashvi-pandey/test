import React from 'react'

import {Grid,Image,Header, Container} from 'semantic-ui-react'

const InstaComponent=(props)=>{
    return(
        <>
    <Header style={{marginBottom:'2%'}} as='h1' size='massive'># INSTAGRAM</Header>
<Grid >
<Container style={{width:'100%' }}>
<Grid.Row><Image size='medium' src='https://multikart-react.vercel.app/assets/images/insta/1.jpg' />
  <Image size='medium' src='https://multikart-react.vercel.app/assets/images/insta/2.jpg' />
  <Image size='medium' src='https://multikart-react.vercel.app/assets/images/insta/3.jpg' />
  <Image size='medium' src='https://multikart-react.vercel.app/assets/images/insta/5.jpg' />
  <Image size='medium' src='https://multikart-react.vercel.app/assets/images/insta/9.jpg' />
  <Image size='small' src='https://multikart-react.vercel.app/assets/images/insta/11.jpg' />

</Grid.Row>
  </Container>


</Grid>
</>
)
}
export default InstaComponent