import React from 'react'
import { Segment,Icon, Step,Grid, Header,Rating, Container,Image ,List,Dropdown} from 'semantic-ui-react'
import FooterMenu from './FooterMenu'
import ImageComponent from '../Components/ImageComponent'

const FooterComponent =(props)=>{
    return(
        <Container style={{marginBottom:'0%' ,width:'100%', alignSelf: 'flex-end',
        
        bottom: '0%'}}  >
  
    <Segment style={{backgroundColor:'whitesmoke',width:"100%"}}>
      <Container style={{width:'90%'}}>
        <Grid columns={4} divided>
    <FooterMenu/>
    <Grid.Row stretched>
      <Grid.Column width={6}>
          
     <Container textAlign='left' >
       <List >
       <List.Item> <ImageComponent size='medium' ImageUrl='https://multikart-react.vercel.app/assets/images/icon/logo.png' /></List.Item>
    <List.Item></List.Item>

    <List.Item> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p></List.Item>
    <List.Item></List.Item>
    <List.Item><p> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></List.Item>
    <List.Item></List.Item>
    <List.Item><p>  Ut enim ad minim veniam,</p></List.Item>
    <List.Item></List.Item>
    <List.Item>
    <Icon size='large' name='facebook f' />
      <Icon style={{marginLeft:'4%'}} size='large' name='google plus g' />
      <Icon style={{marginLeft:'4%'}} size='large' name='twitter' />
      <Icon style={{marginLeft:'4%'}} size='large' name='instagram' />
      <Icon style={{marginLeft:'4%'}} size='large' name='wi-fi' />
     
       
    </List.Item>
  </List>
  </Container>
      </Grid.Column>
      <Grid.Column width={2}>
       
       <Container textAlign='left' >
       <List >
       <List.Item><Header as="h3">MY ACCOUNT</Header></List.Item>
    <List.Item></List.Item>
    <List.Item>Womens</List.Item>
    <List.Item></List.Item>
    <List.Item>Clothing</List.Item>
    <List.Item></List.Item>

    <List.Item>Accessories</List.Item>
    <List.Item></List.Item>

    <List.Item>Featured</List.Item>
  </List>
  </Container>
      </Grid.Column>
      <Grid.Column width={3}>
     
      <Container textAlign='left' >
       <List >
       <List.Item> <Header as="h3">WHY WE CHOOSE</Header></List.Item>
    <List.Item></List.Item>

    <List.Item>Shipping & Return</List.Item>
    <List.Item></List.Item>
    <List.Item>Secure Shopping</List.Item>
    <List.Item></List.Item>

    <List.Item>Gallary</List.Item>
    <List.Item></List.Item>

    <List.Item>Affiliates</List.Item>
    <List.Item></List.Item>

<List.Item>Contacts</List.Item>
  </List>
  </Container>
      </Grid.Column>
      <Grid.Column width={4}>
      <Container textAlign="left">
      <List >
       <List.Item> <Header as="h3">STORE INFORMATION</Header></List.Item>
    <List.Item></List.Item>

    <List.Item>Multikart Demo Store, Demo Store India 345-659</List.Item>
    <List.Item></List.Item>
    <List.Item>Call Us: 123-456-7898</List.Item>
    <List.Item></List.Item>

    <List.Item>Email Us: Support@Fiot.Com</List.Item>
    <List.Item></List.Item>

    <List.Item>Fax: 123456</List.Item>

  </List>
  </Container>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </Container>
  </Segment>

  <Container style={{width:"100%"}}>
    
  <Grid columns='12'>
    <Grid.Column width={4} style={{marginLeft:"2%"}}>
    <Header  as="h5" style={{opacity: 0.5}}> © 2020-21 themeforest powered by pixelstrap</Header>
    </Grid.Column>
    <Grid.Column width={3}>
        <List>
    <List.Item>
    
    </List.Item>
    </List>
    </Grid.Column>
    <Grid.Column width={2}>
    </Grid.Column>
  
    <Grid.Column width={2}>
    </Grid.Column>
  
    <Grid.Column>
    <List>
    <List.Item>
   
  
    </List.Item>
    </List>


    </Grid.Column>
    <Grid.Column width={2}>
    <List>
    <List.Item>
    <Image style={{marginRight:'0.5%'}}   circular src="https://th.bing.com/th/id/OIP.hIYYmq3EgJ69jt_olFLiIwHaEs?pid=ImgDet&rs=1" size='mini' />
    <Image style={{marginRight:'0.5%'}}  circular src="https://th.bing.com/th/id/OIP.tt-mZ05ZyUPcf5EtFz5kmQHaDQ?w=334&h=154&c=7&o=5&pid=1.7" size='mini' />
    <Image style={{marginRight:'0.5%'}}  circular src="https://th.bing.com/th/id/OIP.sz7ZD5WMqtXYCHn6IjLVbQHaEc?w=286&h=180&c=7&o=5&pid=1.7" size='mini' />
    <Image style={{marginRight:'0.5%'}}  circular src="https://th.bing.com/th/id/OIP.Peo22KIsTmg-x4e6eiqsiQHaE8?w=240&h=180&c=7&o=5&pid=1.7" size='mini' />
    <Image style={{marginRight:'0.5%'}}  circular src="https://th.bing.com/th/id/OIP.WGxtnw81X7exO2PxiVlL9QHaEK?w=285&h=180&c=7&o=5&pid=1.7" size='mini' />
    </List.Item>
    </List>
   

    </Grid.Column>
  </Grid>
  </Container>

        </Container>
    )
}
export default FooterComponent