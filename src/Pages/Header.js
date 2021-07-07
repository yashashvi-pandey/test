import React, { Component } from 'react'
import { Container, Icon, Menu, Segment, Dropdown, Grid} from 'semantic-ui-react'
import Sidebar from './SideBar'
import DropdownComponent from '../Components/DropdownComponent'
import ImageComponent from '../Components/ImageComponent'
import SideBar from '../Components/sideBar'
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import {
  Link
} from "react-router-dom";
 const MenuExampleSecondary =(props)=> {


 const handleItemClick = (e, { name }) => this.setState({ activeItem: name })


const handleSideBar=()=>{
  console.log('clicked');
  return <Sidebar/>;
}  

  

    return (
    <Container style={{marginTop:'2%',marginBottom:'2%',width:'100%'}}>
<Menu secondary >

<Grid container style={{marginTop:'0.4%'}}><Grid.Column width='3'><SideBar /></Grid.Column>
<Grid.Column width='7'><ImageComponent onClick={handleSideBar}  ImageUrl='https://multikart-react.vercel.app/assets/images/icon/logo.png' /></Grid.Column>
</Grid>




<Menu.Item/> 
        <Menu.Item     
        > <DropdownComponent text="HOME"/>
   </Menu.Item>
      <Menu.Item
  
       ><DropdownComponent text="SHOP"/></Menu.Item>
     <Menu.Item
       > <DropdownComponent text="PRODUCTS"/></Menu.Item>
     <Menu.Item
       > <DropdownComponent text="FEATURES"/></Menu.Item>
         <Menu.Item
        > <DropdownComponent text="PAGES"/></Menu.Item>
        <Menu.Item  
        > <DropdownComponent text={"BLOGS"}/></Menu.Item>
      <Menu.Item  >
      <Link style={{color:'black'}} to="/search"> <IconButton size='big' aria-label="show 17 new notifications" color="inherit">
              <Badge  color="secondary">
                <SearchIcon />
              </Badge>
            </IconButton></Link>  
      <Link style={{color:'black'}} to="/setting"> <IconButton size='big' aria-label="show 17 new notifications" color="inherit">
              <Badge  color="secondary">
                <SettingsIcon />
              </Badge>
            </IconButton></Link>  
      <Link style={{color:'black'}} to="/Cart"> <IconButton size='big' aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={props.Item} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton></Link> 

     
       
          </Menu.Item>
         
      </Menu>

     


 </Container>
    )
  
}
export default MenuExampleSecondary