import { ChevronUpIcon } from '@chakra-ui/icons'
import { Box, Button, Center, IconButton, Image, useBreakpointValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'

import Slider from 'react-slick'

const Sale = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 1400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  const [slider, setSlider] = React.useState();

// These are the breakpoints which changes the position of the
// buttons as the screen size changes
const top = useBreakpointValue({ base: "90%", md: "50%" });
const side = useBreakpointValue({ base: "30%", md: "10px" });


const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};


const cards = [
  "https://logan.nnnow.com/content/dam/nnnow-project/04-nov-2022/SC_Offerpagedesktop.jpg",
  
  "https://logan.nnnow.com/content/dam/nnnow-project/12-dec-2022/se/ABH_Christmas.jpg",
 
];
  return (
    
   <>
     <Box
        position={"relative"}
        height={"620px"}
        width={"85%"}
        margin='auto'
        overflow={"hidden"}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          backgroundColor={"transparent"}
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          backgroundColor={"transparent"}
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((url, index) => (
            <Box
              key={index}
              height={"lg"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="repeat"
              backgroundSize="cover"
              backgroundImage={`url(${url})`}
            />
          ))}
        </Slider>
      </Box>
      <Center mt="20px">
          <Image
            width="70rem"
            src="https://logan.nnnow.com/content/dam/nnnow-project/30-sep-2020/30SEP20_SEPHORA-OFFERPAGEZ_PREHEADER_DESK.jpg"
          />
        </Center>
        <Box
          display={"flex"}
          justifyContent="center"
          gap="3%"
          width="70rem"
          margin={"auto"}
          mt="25px"
        >
          <Image
            width="25%"
            src="https://logan.nnnow.com/content/dam/nnnow-project/13-oct-2022/Ikoo_Pstory1.jpg"
          />
          <Image
            width="25%"
            src="https://logan.nnnow.com/content/dam/nnnow-project/31-aug-2022/se/Hanzdefuko_Pstory.jpg"
          />
          <Image
            width="25%"
            src="https://logan.nnnow.com/content/dam/nnnow-project/15-feb-2022/PIXI_P-story.jpg"
          />
            <Image
            width="25%"
            src="https://logan.nnnow.com/content/dam/nnnow-project/25-oct-2022/ABH_P-story_Flat25off.jpg"
          />
        </Box>
        {isVisible ? null : (  <Center>
      <Box p='1px' mt='5rem' width={'150px'} backgroundColor={'#abc72c'}>
      <ChevronUpIcon/>
   
      <Button onClick={scrollToTop} backgroundColor={'transparent'}>BACK TO TOP</Button>

      </Box>
      </Center>)}
      
    
   </>
  )
}

export default Sale
