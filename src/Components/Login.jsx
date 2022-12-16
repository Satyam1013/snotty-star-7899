import {
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <Button backgroundColor={"transparent"} onClick={onOpen}>
        Login
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={"33px"} margin={"auto"} fontWeight={"bolder"}>
            LOGIN
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel
                letterSpacing={"1px"}
                fontWeight={"light"}
                fontSize={"11px"}
              >
                Enter your Phone / Email
              </FormLabel>
              <Input borderRadius={""} border="solid 3px" ref={initialRef} />
            </FormControl>
          </ModalBody>
          <Button colorScheme="pink" width="90%" borderRadius={""} m="auto">
            CONTINUE
          </Button>
          <br />
          <br />
          <Flex alignItems={"center"} justifyContent="center">
            <Divider
              width="35%"
              orientation="horizontal"
              border={"solid 2px black"}
            />
            OR
            <Divider
              width="35%"
              orientation="horizontal"
              border={"solid 2px black"}
            />
          </Flex>
          <br />
          <Center>
            <Button
              width="90%"
              borderRadius={""}
              backgroundColor="#4285f4"
              color="white"
              variant={"outline"}
              leftIcon={<FcGoogle />}
            >
              <Center>
                <Text>Continue with Google</Text>
              </Center>
            </Button>
          </Center>
          <Center>
            <Button
              mt="10px"
              colorScheme={"facebook"}
              leftIcon={<FaFacebook />}
              width="90%"
              borderRadius={""}
            >
              <Center>
                <Text>Continue with Facebook</Text>
              </Center>
            </Button>
          </Center>
          <br/>
          <br/>
          <br/>
          <Flex width='60%' m='auto'>
          <Text  fontSize={'11px'} letterSpacing='1px' >By proceeding, you agree to_</Text>
          <Text color='#ff3399' letterSpacing='1.5px' textDecoration={'underline'} fontSize={'11px'}>Privacy Policy,</Text>
          </Flex>
          <Center>
          <Text color='#ff3399' letterSpacing='1.5px' textDecoration={'underline'} fontSize={'11px'}>Terms & Conditions</Text>
          </Center>
          <br/>
          <br/>
          <br/>
        </ModalContent>
      </Modal>
    </>
  );
}
