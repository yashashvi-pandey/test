import React from 'react'
import { Image } from 'semantic-ui-react'

const ImageComponent =(props)=>{
return(
  
      <Image
      // className={props.className}
      src={props.ImageUrl}
      // alt={props.alt}
    />
  
)
}
export default ImageComponent