import React from 'react';
import { Container, Grid, Header,Segment,Dropdown,Icon,Text,List } from 'semantic-ui-react';
import DropdownComponent from '../Components/DropdownComponent'

const UpperBody =()=>{
    return(
        <Container style={{width:"100%",backgroundColor:'whitesmoke',marginTop:'0.9%'}}>
          
            <Grid columns='12'>
    <Grid.Column width={4} style={{marginLeft:"2%"}}>
    <Header  as="h5" style={{opacity: 0.5}}>Welcome to Our store Multikart</Header>
    </Grid.Column>
    <Grid.Column width={3}>
        <List>
    <List.Item>
     
      <List.Content>  <List.Icon name='phone'  color="red"/>Call Us: 123 - 456 - 7890</List.Content>
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
     
      <List.Content>
      <List.Icon name='heart'/>
    <Dropdown  text=' Wishlist'  labeled >
    <Dropdown.Menu>
      <Dropdown.Item text='Empty' />
 
    </Dropdown.Menu>
  </Dropdown></List.Content>
    </List.Item>
    </List>


    </Grid.Column>
    <Grid.Column width={2}>
    <List>
    <List.Item>
     
      <List.Content> <List.Icon name='user'/> <DropdownComponent text='MY ACCOUNT'/></List.Content>
    </List.Item>
    </List>
   

    </Grid.Column>
  </Grid>
        </Container>

    )
}
export default UpperBody
