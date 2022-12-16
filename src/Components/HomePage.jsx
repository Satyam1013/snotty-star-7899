import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Button,
  Image,
  Center,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import { ChevronUpIcon } from '@chakra-ui/icons'


// Settings for the slider
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

const buttons = [
  "STEALS & DEALS",
  "BEAUTY MINIS UNDER ₹999",
  "EVERYDAY ESSENTIALS",
  "TRENDING NOW",
  "EDITOR'S PICKS",
  "TOP FRAGRANCES",
];

const your_favourite_brands = [
  "https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/scdsk.jpeg",
  "https://logan.nnnow.com/content/dam/nnnow-project/11-oct-2021-/12OCT21-TILE-MUFE(1).jpg",
  "https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/bendsk.jpg",
  "https://logan.nnnow.com/content/dam/nnnow-project/05-jan-2022/TF_Logo(1).jpg",
  "https://logan.nnnow.com/content/dam/nnnow-project/03-jan-2022/se/Lancome_Logo(1).jpeg",
  "https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/HDdesk.jpg",
];

export default function HomePage() {
  const [isVisible, setIsVisible] = React.useState(false);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

React.useEffect(() => {
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

  
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  
  const cards = [
    "https://logan.nnnow.com/content/dam/nnnow-project/12-dec-2022/se/SC_HPBanner_Desktop.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/12-dec-2022/se/Bobbibrown_Topbanner01_desktop.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/12-dec-2022/se/ABH_Christmas.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/13-oct-2022/SC_TopBannerdesktop.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/13-dec-2022/1125X500_HPBanner_Web35LM.jpg",
    "https://th.bing.com/th/id/R.cc5df02b557a4e53bf588f7e2da8ab62?rik=8aEKD96SZkODwQ&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-6%2fMakeup-Product-HD-Desktop-Wallpaper-21086.jpg&ehk=Vs1aFPUe8lE4c7iH1k6wlxrEiVt1mVRS0Q57O2MFtlU%3d&risl=&pid=ImgRaw&r=0",
  ];

  return (
    <>
      <Box
        position={"relative"}
        height={"620px"}
        width={"full"}
        overflow={"hidden"}
      >
       
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
              height={"xl"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="repeat"
              backgroundSize="cover"
              backgroundImage={`url(${url})`}
            />
          ))}
        </Slider>
      </Box>
      <Box>
        {buttons.map((el) => (
          <Button
            size="md"
            height="58px"
            width="180px"
            borderRadius={""}
            borderColor="green.500"
            backgroundColor={"black"}
            color="white"
            whiteSpace={"0px"}
            margin="10px"
          >
            {el}
          </Button>
        ))}
      </Box>
      <Box>
        <Center>
          <Image
            width="75rem"
            src="https://logan.nnnow.com/content/dam/nnnow-project/07-nov-2022/Header_Desk.jpg"
          />
        </Center>
        <Center mt="20px">
          <Image
            width="70rem"
            src="https://logan.nnnow.com/content/dam/nnnow-project/12-dec-2022/se/TomFord_BOTWstrip_Desktop.jpg"
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
            width="31.3%"
            src="https://logan.nnnow.com/content/dam/nnnow-project/12-dec-2022/se/TomFord_Tile_01.jpg"
          />
          <Image
            width="31.3%"
            src="https://logan.nnnow.com/content/dam/nnnow-project/12-dec-2022/se/TomFord_Tile_02.jpg"
          />
          <Image
            width="31.3%"
            src="https://logan.nnnow.com/content/dam/nnnow-project/12-dec-2022/se/TomFord_Tile_03.jpg"
          />
        </Box>
      </Box>
      <Box>
        <Center>
          <Image
            width="75rem"
            src="https://logan.nnnow.com/content/dam/nnnow-project/16-march-2022/justlanded.jpg"
          />
        </Center>
      </Box>
      <Box mt="10rem">
        <Center>
          <Image
            width={"70rem"}
            src="https://logan.nnnow.com/content/dam/nnnow-project/22-march-2022/Loyalty_Strip_Desk.jpg"
          />
        </Center>
        <Center mt="20px">
          <Image
            width={"75rem"}
            src={`https://logan.nnnow.com/content/dam/nnnow-project/05-nov-2022/Sephora_HeaderStrip_LazyGirl'sBFFstext(1).jpg`}
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
            width="31.3%"
            src="https://logan.nnnow.com/content/dam/nnnow-project/05-nov-2022/se/Sephora_ContentP-Story_CreamyConcealers.jpg"
          />
          <Image
            width="31.3%"
            src="https://logan.nnnow.com/content/dam/nnnow-project/05-nov-2022/se/Sephora_ContentP-Story_TrendingTints.jpg"
          />
          <Image
            width="31.3%"
            src="https://logan.nnnow.com/content/dam/nnnow-project/05-nov-2022/se/Sephora_ContentP-Story_MagicalMascaras.jpg"
          />
        </Box>
      </Box>
      <Box mt="10rem">
        <Center mt="20px">
          <Image
            width={"75rem"}
            src={`https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_4_DESK.jpg`}
          />
        </Center>
        <Box
          display={"flex"}
          justifyContent="center"
          gap="6%"
          width="11rem"
          margin={"auto"}
          mt="25px"
        >
          {your_favourite_brands.map((el) => (
            <Image src={el} />
          ))}
        </Box>
      </Box>
      <Box mt="10rem">
        <Center mt="20px">
          <Image
            width={"75rem"}
            src={
              "https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_5_DESK.jpg"
            }
          />
        </Center>
        <SimpleGrid columns={3} spacing={8} width="70rem" margin={"auto"}>
          <Image src="https://logan.nnnow.com/content/dam/nnnow-project/13-oct-2022/SC_NOTB.jpg" />
          <Image src="https://logan.nnnow.com/content/dam/nnnow-project/31-mar-2022/se/SC_NOTB_BigByDefinitionMascara.jpg" />
          <Image src="https://logan.nnnow.com/content/dam/nnnow-project/12-dec-2022/se/HomepageNewontheBlockBanner1659X1020.png" />
          <Image src="https://logan.nnnow.com/content/dam/nnnow-project/27-nov-2022/se/Smashbox_NOTB.jpg" />
          <Image src="https://logan.nnnow.com/content/dam/nnnow-project/31-oct-2022/ABH_NOTB_RoseMetalsPallete.jpg" />
          <Image src="https://logan.nnnow.com/content/dam/nnnow-project/14-sep-2022/Hudabeauty_NOTB.jpg" />
        </SimpleGrid>
      </Box>
      <Box mt="10rem">
        <Center mt="20px">
          <Image
            width={"75rem"}
            src={
              "https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_7_DESK.jpg"
            }
          />
        </Center>
        <SimpleGrid columns={3} spacing={4} width="70rem" margin={"auto"}>
          <Box>
            <Image src="https://logan.nnnow.com/content/dam/nnnow-project/23-march-2022/se-blog/Sephora_MakingaLook_BlogCoverTileOption02.jpg" />
            <Text fontSize={'22px'}>MAKING A LOOK</Text>
            <Text>With Anaita Shroff Adajania</Text>

          </Box>
          <Box>
            <Image src="https://logan.nnnow.com/content/dam/nnnow-project/24dec19/23DEC19_BLOG3.jpg" />
            <Text fontSize={'22px'}>7 MASKS</Text>
            <Text>that'll save your skin</Text>
          </Box>

          <Box>
            <Image src="https://logan.nnnow.com/content/dam/nnnow-project/24dec19/23DEC19_BLOG4.jpg" />
          <Text fontSize={'22px'}>LONG LASTING MAKEUP?</Text>
          <Text>Here's how!</Text>
          </Box>
        </SimpleGrid>
      </Box>
      {isVisible ? (  <Center>
      <Box p='1px' mt='5rem' width={'150px'} backgroundColor={'#abc72c'}>
      <ChevronUpIcon/>
   
      <Button onClick={scrollToTop} backgroundColor={'transparent'}>BACK TO TOP</Button>

      </Box>
      </Center>) : null}
      
    </>
  );
}
