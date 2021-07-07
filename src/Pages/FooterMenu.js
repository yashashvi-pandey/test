import React, { Component } from 'react'
import { Input, Menu,Button, Container, Divider,Segment,Header } from 'semantic-ui-react'

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <>
      <Menu secondary>
        <Menu.Item
         
        ><Header as="h3">KNOW IT ALL FIRST!</Header>
        
        </Menu.Item>
       
        <Menu.Menu position='right' style={{marginRight:'2%',marginLeft:'40%'}}>
          <Menu.Item>
           
          </Menu.Item>
          <Menu.Item position='right'><Container> <Input icon='search' size="large"  placeholedr="Enter your Email" /> <Button color="orange" size="large" >SubScribe</Button></Container></Menu.Item>
        </Menu.Menu>
      </Menu>
      <Divider horizontal>
      <Header as='h4'>
  
      </Header>
       
      </Divider>
     </>
    )
  }
}
