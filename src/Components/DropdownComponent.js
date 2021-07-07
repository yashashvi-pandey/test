import React from 'react'
import { Dropdown,Menu } from 'semantic-ui-react'

// TODO: This is missing functionality for sub-menu here from SUI core examples.
// The "Publish To Web" item should contain a sub-menu.



const options = [
    { key: 1, text: 'Choice 1', value: 1 },
    { key: 2, text: 'Choice 2', value: 2 },
    { key: 3, text: 'Choice 3', value: 3 },
  ]

const DropdownComponent = (props) => (<>
  {/* <Dropdown text={props.text}>
    <Dropdown.Menu>
      <Dropdown.Item text='New' />
      <Dropdown.Item text='Open...' description='ctrl + o' />
      <Dropdown.Item text='Save as...' description='ctrl + s' />
      <Dropdown.Item text='Rename' description='ctrl + r' />
      <Dropdown.Item text='Make a copy' />
    </Dropdown.Menu>
  </Dropdown> */}


    <Dropdown text={props.text} options={options} simple item />
  
  </>
)

export default DropdownComponent