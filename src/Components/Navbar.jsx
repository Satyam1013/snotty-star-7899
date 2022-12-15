import {
  Box,
  Flex,
  HStack,
  useColorModeValue,
  Image,
  Text,
  Input,
  Heading,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  Portal,
  MenuItem,
  SimpleGrid,
} from "@chakra-ui/react";

export default function Navbar() {
  // const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={12} alignItems={"center"} justifyContent={"space-around"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Image
                width="100px"
                src="https://cdn02.nnnow.com/web-images/master/navtree_metaData/59b2425ae4b0d70964ee66e0/1505806763887/12NNNOWLOGODESKTOP.png"
                alt="NNNOW"
              />
            </Box>
            <Box color="#d6d6d6" class="nw-header-seperator">
              |
            </Box>

            <Box display="flex" alignItems={"center"} gap="10px">
              <Image
                width="13px"
                height={"15px"}
                src="https://cdn-icons-png.flaticon.com/128/684/684908.png"
              />
              <Text>Store Locator</Text>
            </Box>

            <Box display="flex" alignItems={"center"} gap="3px">
              <Image
                width="13px"
                height={"15px"}
                src="https://cdn-icons-png.flaticon.com/128/2740/2740655.png"
              />
              <Image
                width="13px"
                height={"15px"}
                src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
              />
              <Image
                width="13px"
                height={"15px"}
                src="https://cdn-icons-png.flaticon.com/128/6968/6968147.png"
              />
            </Box>
            <Box>
              Get 10% OFF on your first purchase. Use Code:
              <Text>BEAUTY10</Text>
            </Box>
            <Box display="flex" alignItems={"center"} gap="3px">
              <Image
                width="13px"
                height={"15px"}
                src="https://cdn-icons-png.flaticon.com/128/6968/6968147.png"
              />
              <Image
                width="13px"
                height={"15px"}
                src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
              />

              <Image
                width="13px"
                height={"15px"}
                src="https://cdn-icons-png.flaticon.com/128/2740/2740655.png"
              />
            </Box>
            <Box display="flex" alignItems={"center"} gap="10px">
              <Image
                width="15px"
                src="https://cdn-icons-png.flaticon.com/128/2820/2820284.png"
              />
              <Text>Get APP</Text>
            </Box>
            <Box color="#d6d6d6" class="nw-header-seperator">
              |
            </Box>
            <Box display="flex" alignItems={"center"} gap="10px">
              <Image
                width="15px"
                src="https://cdn-icons-png.flaticon.com/128/9128/9128295.png"
              />
              <Text>Track Order</Text>
            </Box>
            <Box color="#d6d6d6" class="nw-header-seperator">
              |
            </Box>
            <Box display="flex" alignItems={"center"} gap="10px">
              <Image
                width="15px"
                src="https://cdn-icons-png.flaticon.com/128/2071/2071721.png"
              />
              <Text>Loyalty</Text>
            </Box>
          </HStack>
        </Flex>
      </Box>

      <Box p={6} display="flex" justifyContent={"space-around"}>
        <Box display={"flex"} alignItems="center">
          <Image
            width="20px"
            height={"20px"}
            src="https://cdn-icons-png.flaticon.com/128/9037/9037798.png"
          />
          <Input border={"transparent"} placeholder="Search SEPHORA" />

          <Divider
            orientation="horizontal"
            backgroundColor={"blackAlpha.700"}
            position={"absolute"}
            mt="30px"
            width={"400px"}
          />
        </Box>

        <Heading fontFamily="mono" fontSize={"43px"} letterSpacing="12px">
          SEPHORA
        </Heading>
        <Box display={"flex"} alignItems="center" gap="15px">
          <Image
            cursor="pointer"
            width="16px"
            height={"18px"}
            src="https://cdn-icons-png.flaticon.com/128/1000/1000621.png"
          />
          <Box color="#d6d6d6" class="nw-header-seperator">
            |
          </Box>
          <Image
            cursor="pointer"
            width="24px"
            height={"32px"}
            src="https://cdn-icons-png.flaticon.com/128/5451/5451640.png"
          />
          <Box color="#d6d6d6" class="nw-header-seperator">
            |
          </Box>
          <Box cursor="pointer" display={"flex"} alignItems="center" gap="10px">
            <Image
              width="16px"
              height={"18px"}
              src="https://cdn-icons-png.flaticon.com/128/8763/8763326.png"
            />
            <Text>Login</Text>
          </Box>
        </Box>
      </Box>
      <Box display={"flex"} justifyContent="center" gap='80px' >
        <Box display={"flex"}>
          <Text fontWeight={"bold"}>SALE</Text>
        </Box>
        <Box>
          <Menu>
            <MenuButton fontWeight={"bold"}>MAKEUP</MenuButton>
            <Portal>
              <MenuList>
                <Box padding="30px">
                  <SimpleGrid columns={5} spacing={10}>
                    <Box fontSize={"12px"}>
                      <MenuItem fontWeight={"bold"}>FACE</MenuItem>
                      <MenuItem>Foundation</MenuItem>
                      <MenuItem>BB & CC Cream</MenuItem>
                      <MenuItem>Concealer</MenuItem>
                      <MenuItem>Face Primer</MenuItem>
                      <MenuItem>Highlighter</MenuItem>
                      <MenuItem>Face Brushes</MenuItem>
                      <MenuItem>Makeup Palette</MenuItem>
                    </Box>

                    <Box fontSize={"12px"}>
                      <MenuItem fontWeight={"bold"}>EYE</MenuItem>
                      <MenuItem>Eye Palettes</MenuItem>
                      <MenuItem>Mascara</MenuItem>
                      <MenuItem>Eyeliner</MenuItem>
                      <MenuItem>Eyebrow</MenuItem>
                      <MenuItem>Eyeshadow</MenuItem>
                      <MenuItem>Eye Primer</MenuItem>
                      <MenuItem>Eye Brushes</MenuItem>
                      <MenuItem>Contact Lenses</MenuItem>
                    </Box>
                    <Box fontSize={"12px"}>
                      <MenuItem fontWeight={"bold"}>LIP</MenuItem>
                      <MenuItem>Lipstick</MenuItem>
                      <MenuItem>Lip Stain</MenuItem>
                      <MenuItem>Lip Gloss</MenuItem>
                      <MenuItem>Lip Liner</MenuItem>
                      <MenuItem>Lip Balm & Treatment</MenuItem>
                      <MenuItem>Lip Brushes</MenuItem>
                    </Box>
                    <Box fontSize={"12px"}>
                      <MenuItem fontWeight={"bold"}>CHEEK</MenuItem>
                      <MenuItem>Blush</MenuItem>
                      <MenuItem>Bronzer</MenuItem>
                      <MenuItem>Highlighter</MenuItem>
                      <MenuItem>Face Oils</MenuItem>
                    </Box>
                    <Box fontSize={"12px"}>
                      <MenuItem fontWeight={"bold"}>NAIL MAKEUP</MenuItem>
                      <MenuItem>Nail Polish</MenuItem>
                      <MenuItem>Nail Care</MenuItem>
                      <MenuItem>Manicure & Pedicure Tools</MenuItem>
                    </Box>
                    <Box fontSize={"12px"}>
                      <MenuItem fontWeight={"bold"}>MAKE ACCESSORIES</MenuItem>
                      <MenuItem>Tweezers & Eyebrow Tools</MenuItem>
                      <MenuItem>Makeup Removers</MenuItem>
                      <MenuItem>Sponges & Applicators</MenuItem>
                      <MenuItem>Makeup Bags & Travel Cases</MenuItem>
                    </Box>
                  </SimpleGrid>
                </Box>
              </MenuList>
            </Portal>
          </Menu>
        </Box>
        <Box>
          <Menu>
            <MenuButton fontWeight={"bold"}>SKINCARE</MenuButton>
            <Portal>
              <MenuList>
                <Box padding="30px">
                  <SimpleGrid columns={4} spacing={10}>
                    <Box fontSize={"12px"}>
                      <MenuItem fontWeight={"bold"}>MOISTURIZERS</MenuItem>
                      <MenuItem>Moisturizers</MenuItem>
                      <MenuItem>Night Creams</MenuItem>
                      <MenuItem>Mists % Essences</MenuItem>
                      <MenuItem>BB & CC Creams</MenuItem>
                    </Box>

                    <Box fontSize={"12px"}>
                      <MenuItem fontWeight={"bold"}>CLEANSERS</MenuItem>
                      <MenuItem>Face Wash & Cleansers</MenuItem>
                      <MenuItem>Makeup Removers</MenuItem>
                      <MenuItem>Face Wipes</MenuItem>
                      <MenuItem>Toners</MenuItem>
                    </Box>
                    <Box fontSize={"12px"}>
                      <MenuItem fontWeight={"bold"}>
                        TREATMENTS & HIGH TECH TOOLS
                      </MenuItem>
                      <MenuItem>Face Serums</MenuItem>
                      <MenuItem>Cleansing Tools</MenuItem>
                      <MenuItem>Eye Creams & Treatments</MenuItem>
                    </Box>
                    <Box fontSize={"12px"}>
                      <MenuItem fontWeight={"bold"}>MASKS</MenuItem>
                      <MenuItem>Face Masks</MenuItem>
                      <MenuItem>Eye Masks</MenuItem>
                      <MenuItem>Sheet Masks</MenuItem>
                      <MenuItem>Nose Masks & Strips</MenuItem>
                      <MenuItem>Lip Masks</MenuItem>
                      <MenuItem>Hair Masks</MenuItem>
                      <MenuItem>Hand Masks</MenuItem>
                      <MenuItem>Foot Masks</MenuItem>
                    </Box>
                    <Box fontSize={"12px"}>
                      <MenuItem fontWeight={"bold"}>BATH & SHOWER</MenuItem>
                      <MenuItem>Body Wash and Shower Gel</MenuItem>
                      <MenuItem>Scrub and Exfoliants</MenuItem>
                      <MenuItem>Exfoliators</MenuItem>
                    </Box>
                    <Box fontSize={"12px"}>
                      <MenuItem fontWeight={"bold"}>BODY MOISTURIZERS</MenuItem>
                      <MenuItem>Body Lotions & Body Oils</MenuItem>
                      <MenuItem>Hand Cream & Foot Cream</MenuItem>
                    </Box>
                  </SimpleGrid>
                </Box>
              </MenuList>
            </Portal>
          </Menu>
        </Box>
        <Box>
          <Menu>
            <MenuButton fontWeight={"bold"}>FRAGRANCE</MenuButton>
            <Portal>
              <MenuList>
                <Box padding="30px">
                  <SimpleGrid columns={2} spacing={10}>
                    <Box fontSize={"12px"}>
                      <MenuItem fontWeight={"bold"}>WOMEN</MenuItem>
                      <MenuItem>Perfume</MenuItem>
                      <MenuItem>Mists & Deodorants</MenuItem>
                    </Box>

                    <Box fontSize={"12px"}>
                      <MenuItem fontWeight={"bold"}>MEN</MenuItem>
                      <MenuItem>Perfume</MenuItem>
                      <MenuItem>Body Sprays and Deodorant</MenuItem>
                    </Box>
                  </SimpleGrid>
                </Box>
              </MenuList>
            </Portal>
          </Menu>
        </Box>
        <Box>
          <Menu>
            <MenuButton fontWeight={"bold"}>HAIRCARE</MenuButton>
            <Portal>
              <MenuList>
                <Box padding="30px">
                  <SimpleGrid columns={2} spacing={10}>
                    <Box fontSize={"12px"}>
                      <MenuItem fontWeight={"bold"}>
                        SHAMPOO AND CONDITIONER
                      </MenuItem>
                      <MenuItem>Shampoo</MenuItem>
                      <MenuItem>Conditioner</MenuItem>
                    </Box>

                    <Box fontSize={"12px"}>
                      <MenuItem fontWeight={"bold"}>
                        HAIR STYLING & TREATMENTS
                      </MenuItem>
                      <MenuItem>Hair Spray</MenuItem>
                      <MenuItem>Hair Oils</MenuItem>
                      <MenuItem>Hair Mask</MenuItem>
                    </Box>
                  </SimpleGrid>
                </Box>
              </MenuList>
            </Portal>
          </Menu>
        </Box>
        <Box>
          <Menu>
            <MenuButton fontWeight={"bold"}>TOOLS AND BRUSHES</MenuButton>
            <Portal>
              <MenuList>
                <Box padding="30px">
                  <SimpleGrid columns={2} spacing={10}>
                    <Box fontSize={"12px"}>
                      <MenuItem fontWeight={"bold"}>BRUSHES</MenuItem>
                      <MenuItem>Face Brushes</MenuItem>
                      <MenuItem>Eye Brushes</MenuItem>
                      <MenuItem>Lip Brushes</MenuItem>
                    </Box>

                    <Box fontSize={"12px"}>
                      <MenuItem fontWeight={"bold"}>TOOLS</MenuItem>
                      <MenuItem>Sponges & Applicators</MenuItem>
                      <MenuItem>Face Tools</MenuItem>
                      <MenuItem>Tweezers & Eyebrow Tools</MenuItem>
                      <MenuItem>Eyelash Curlers</MenuItem>
                      <MenuItem>Brush Cleaners</MenuItem>
                    </Box>
                  </SimpleGrid>
                </Box>
              </MenuList>
            </Portal>
          </Menu>
        </Box>
        <Box>
          <Menu>
            <MenuButton fontWeight={"bold"}>BRANDS</MenuButton>
            <Portal>
              <MenuList>
                <Box padding="30px">
                  <SimpleGrid columns={5} spacing={10}>
                    <Box fontSize={"12px"}>
                      <MenuItem fontWeight={"bold"}>TOP MAKEUP BRANDS</MenuItem>
                      <MenuItem>Sephora Collection</MenuItem>
                      <MenuItem>Lancome</MenuItem>
                      <MenuItem>Huda Beauty</MenuItem>
                      <MenuItem>Benefit Cosmetics</MenuItem>
                      <MenuItem>Anastasia Beverly Hills</MenuItem>
                      <MenuItem>Bobbi Brown</MenuItem>
                      <MenuItem>Smashbox</MenuItem>
                      <MenuItem>Estee Lauder</MenuItem>
                      <MenuItem>MAC</MenuItem>
                      <MenuItem>Make Up For Ever</MenuItem>
                      <MenuItem>Guerlain</MenuItem>
                    </Box>

                    <Box fontSize={"12px"}>
                      <MenuItem fontWeight={"bold"}>
                        TOP SKINCARE BRANDS
                      </MenuItem>
                      <MenuItem>Lancome</MenuItem>
                      <MenuItem>Caudalie</MenuItem>
                      <MenuItem>Kora Organics</MenuItem>
                      <MenuItem>Mario Badescu</MenuItem>
                      <MenuItem>Foreo </MenuItem>
                      <MenuItem>Pixi</MenuItem>
                      <MenuItem>Shiseido</MenuItem>
                      <MenuItem>Estee Lauder</MenuItem>
                      <MenuItem>Clarins</MenuItem>
                      <MenuItem>Elizabeth Arden</MenuItem>
                      <MenuItem>Clinique</MenuItem>
                      <MenuItem>Gallinee</MenuItem>
                      <MenuItem>Wishful</MenuItem>
                      <MenuItem>Sunday Riley</MenuItem>
                    </Box>
                    <Box fontSize={"12px"}>
                      <MenuItem fontWeight={"bold"}>
                        TOP FRAGRANCE BRANDS
                      </MenuItem>
                      <MenuItem>Tom Ford</MenuItem>
                      <MenuItem>Huga Boss</MenuItem>
                      <MenuItem>Issey Miyake</MenuItem>
                      <MenuItem>Dolce & Gabbana</MenuItem>
                      <MenuItem>Paco Rabanne</MenuItem>
                      <MenuItem>Bvlgari</MenuItem>
                      <MenuItem>Kayali</MenuItem>
                      <MenuItem>Roberto Cavalli</MenuItem>
                      <MenuItem>Versace</MenuItem>
                      <MenuItem>Calvin Klein</MenuItem>
                      <MenuItem>Chopard</MenuItem>
                      <MenuItem>Yves Saint Laurent</MenuItem>
                      <MenuItem>Burberry</MenuItem>
                    </Box>
                    <Box fontSize={"12px"}>
                      <MenuItem fontWeight={"bold"}>NEW IN</MenuItem>
                      <MenuItem>L'Atelier Parfum</MenuItem>
                      <MenuItem>ONE/SIZE by Patricj Starrr</MenuItem>
                      <MenuItem>Dior</MenuItem>
                      <MenuItem>Too Faced</MenuItem>
                      <MenuItem>Hanz de Fuko</MenuItem>
                      <MenuItem>Ikoo</MenuItem>
                      <MenuItem>Ouai</MenuItem>
                      <MenuItem>Abhati Suisse</MenuItem>
                    </Box>

                    <Box fontSize={"12px"}>
                      <MenuItem fontWeight={"bold"}>BRANDS A-Z</MenuItem>
                    </Box>
                  </SimpleGrid>
                </Box>
              </MenuList>
            </Portal>
          </Menu>
        </Box>
      </Box>
      <Divider
            orientation="horizontal"
            backgroundColor={"blackAlpha.700"}
            textAlign='center'
            position={"absolute"}
            mt="10px"
            ml='100px'
            width={"85%"}
          />
    </>
  );
}
