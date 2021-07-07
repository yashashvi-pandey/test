import React from 'react'
import { Tab,Image,Grid,Header,Rating, Container } from 'semantic-ui-react'
import HeaderGridComponent from '../Components/HomeComponents/HomeGridComponents'
const panes = [
  {
    menuItem: 'NEW ARRIVAL',
    render: () => <Tab.Pane attached={false}> <Grid relaxed columns={4} >
    <Grid.Row>
<Grid.Column><HeaderGridComponent url="https://multikart-react.vercel.app/assets/images/pro3/10.jpg" rating={2} price={122} name="Black Top"/>

</Grid.Column>
<Grid.Column><HeaderGridComponent url="https://multikart-react.vercel.app/assets/images/pro3/11.jpg" rating={3.5} price={221} name="Green Top"/>

</Grid.Column>
<Grid.Column><HeaderGridComponent url="https://multikart-react.vercel.app/assets/images/pro3/12.jpg" rating={4} price={200} name="Blue Top"/>

</Grid.Column>
<Grid.Column><HeaderGridComponent url="https://multikart-react.vercel.app/assets/images/pro3/13.jpg" rating={1} price={150} name="Suit"/>

</Grid.Column>
</Grid.Row></Grid></Tab.Pane>,
  },
  {
    menuItem: 'FEATURED',
    render: () => <Tab.Pane attached={false}> <Grid relaxed columns={4} >
    <Grid.Row>
<Grid.Column>
<Image src='https://multikart-react.vercel.app/assets/images/furniture/product/20.jpg' />
      <Rating icon='star' defaultRating={3} maxRating={3} />
<Header color="red" as="h2">arm chair</Header>
    <Header as="h1" size="huge">$200.00</Header>
</Grid.Column>
<Grid.Column>
<Image src='https://multikart-react.vercel.app/assets/images/furniture/product/19.jpg' />
      <Rating icon='star' defaultRating={3} maxRating={3} />
<Header color="red" as="h2">arm chair</Header>
    <Header as="h1" size="huge">$200.00</Header>
</Grid.Column>
<Grid.Column>
<Image src='https://multikart-react.vercel.app/assets/images/furniture/product/6.jpg' />
      <Rating icon='star' defaultRating={3} maxRating={3} />
<Header color="red" as="h2">arm chair</Header>
    <Header as="h1" size="huge">$200.00</Header>
</Grid.Column>
<Grid.Column>
<Image src='https://multikart-react.vercel.app/assets/images/furniture/product/4.jpg' />
      <Rating icon='star' defaultRating={3} maxRating={3} />
<Header color="red" as="h2">arm chair</Header>
    <Header as="h1" size="huge">$200.00</Header>
</Grid.Column>
</Grid.Row></Grid></Tab.Pane>,
  },
  {
    menuItem: 'SPECIAL',
    render: () => <Tab.Pane attached={false}> <Grid relaxed columns={4} >
    <Grid.Row>
<Grid.Column>
<Image src='https://multikart-react.vercel.app/assets/images/furniture/product/7.jpg' />
      <Rating icon='star' defaultRating={3} maxRating={3} />
<Header color="red" as="h2">arm chair</Header>
    <Header as="h1" size="huge">$200.00</Header>
</Grid.Column>
<Grid.Column>
<Image src='https://multikart-react.vercel.app/assets/images/furniture/product/8.jpg' />
      <Rating icon='star' defaultRating={3} maxRating={3} />
<Header color="red" as="h2">arm chair</Header>
    <Header as="h1" size="huge">$200.00</Header>
</Grid.Column>
<Grid.Column>
<Image src='https://multikart-react.vercel.app/assets/images/furniture/product/9.jpg' />
      <Rating icon='star' defaultRating={3} maxRating={3} />
<Header color="red" as="h2">arm chair</Header>
    <Header as="h1" size="huge">$200.00</Header>
</Grid.Column>
<Grid.Column>
<Image src='https://multikart-react.vercel.app/assets/images/furniture/product/12.jpg' />
      <Rating icon='star' defaultRating={3} maxRating={3} />
<Header color="red" as="h2">arm chair</Header>
    <Header as="h1" size="huge">$200.00</Header>
</Grid.Column>
</Grid.Row></Grid></Tab.Pane>,
  },
]

const TabExampleSecondary = () => (
  <Container textAlign='center'><Tab menu={{ secondary: true }} panes={panes} /></Container>
)

export default TabExampleSecondary
