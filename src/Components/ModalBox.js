import React,{useEffect} from 'react'
import { Button, Container, Header, Icon, Modal, Segment,Image, Input } from 'semantic-ui-react'


function ModalExampleContentImage() {
    const [open, setOpen] = React.useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This will run after 3 second!')
      setOpen(true)
    
    }, 3000);
 
  
  }, []);





  return (
   <Modal  
   closeIcon
    style={{marginLeft:'25%',marginTop:'15%' ,height:"50%"}}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      
  
    > 
    <Modal.Content  image> <Image  style={{width:"100%"}} size='medium' src='https://multikart-react.vercel.app/_next/static/images/Offer-banner-bd137ed69c91ca12fda2892b70df886a.png' />
  
    </Modal.Content>
    
<Modal.Content><Header size='huge' as='h1' textAlign='center'><b>NEWSLETTER</b></Header></Modal.Content>
<Modal.Content  ><Input  style={{width:"80%",marginLeft:'10%'}} textAlign='center' placeholder='Enter your email'></Input></Modal.Content>

    <Modal.Content  >  
      <Button style={{marginLeft:'45%'}} onClick={() => setOpen(false)} color='orange'>
        SUBSCRIBE
      </Button>
    </Modal.Content>
    
    </Modal>
  )
}

export default ModalExampleContentImage
