import React from 'react'
import { Image, Reveal } from 'semantic-ui-react'

const RevealExampleFade = () => {
    return( <Reveal animated='fade'>
    <Reveal.Content visible>
      <Image src='https://th.bing.com/th/id/OIP.WGxtnw81X7exO2PxiVlL9QHaEK?w=285&h=180&c=7&o=5&pid=1.7' size='small' />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image src='https://th.bing.com/th/id/OIP.WGxtnw81X7exO2PxiVlL9QHaEK?w=285&h=180&c=7&o=5&pid=1.7' size='small' />
    </Reveal.Content>
  </Reveal>)
}
 


export default RevealExampleFade