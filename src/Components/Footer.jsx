import { Box, Button,  Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <>
    <Box backgroundColor={'#f2f2f2'} p='15px'>
    <Heading mt='20px' fontSize={'30px'}>GET THE LATEST NEWS & OFFERS IN BEAUTY & FASHION</Heading>
    <Box display={'flex'} justifyContent='center' mt='10px'>
    <Input padding={'25px'} backgroundColor={'white'} borderRadius={''} width='400px' placeholder='Enter your email address'/>
    <Button padding={'25px'} backgroundColor={'black'} color='white' borderRadius={''}>SUBSCRIBE</Button>
    </Box>
    </Box>
    <Box>
<Text>Skin Care Products On NNNOW.com Can Take Your Face From Blah To Blooming</Text>
Skincare products can be quite a difficult choice. We often spend days and months figuring out what works for us. Does Sephora's Instant Moisturizer work better for you, considering the lack of time or a Total Moisture Facial Cream from Benefit Cosmetics suffice?

    </Box>
    </>
  )
}

export default Footer