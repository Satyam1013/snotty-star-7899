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
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AuthContext } from "../Context/AuthContextProvider";


export default function Login() {
  const { authState, loginUser, setName, name, handleShowLogin} = useContext(AuthContext);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [ card, setCard ] = useState(false)
 
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return authState ?   
      (
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
            CREATE ACCOUNT
          </ModalHeader>
      
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel
                letterSpacing={"1px"}
                fontWeight={"light"}
                fontSize={"11px"}
              >
               Name*
              </FormLabel>
              <Flex>
              <Select width={'20%'} fontSize='11px' placeholder='Select' borderRadius={''}>
  <option value='Mr'>Mr</option>
  <option value='Ms'>Ms</option>

</Select>
<Input value={name} width={'80%'} borderRadius={''} onChange={(e) => setName(e.target.value)} />
              </Flex>
             
            </FormControl>
          </ModalBody>

          <ModalBody>
          <FormLabel
                letterSpacing={"1px"}
                fontWeight={"light"}
                fontSize={"11px"}
              >
               Email*
              </FormLabel>
        <Input value={email} borderRadius={''} />
        </ModalBody>
          <br />
     
          <ModalBody>
          <FormLabel
                letterSpacing={"1px"}
                fontWeight={"light"}
                fontSize={"11px"}
              >
               Password*
              </FormLabel>
        <Input value={password} borderRadius={''} onChange={(e) => setPassword(e.target.value)}/>
        </ModalBody>
        <br/>
        <ModalBody>
          <FormLabel
                letterSpacing={"1px"}
                fontWeight={"light"}
                fontSize={"11px"}
              >
            Phone Number*
              </FormLabel>
        <Input borderRadius={''}/>
        </ModalBody>
        <br/>
        <Button colorScheme="pink" disabled={name==='' || email==='' || password===''} width="90%" borderRadius={""} m="auto" onClick={handleShowLogin}>
            CONTINUE
          </Button>
          <br/>
          <br/>
          <br/>
         </ModalContent>
      </Modal>
       </>
      ) : ( <>
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
              <Input value={email} borderRadius={""} border="solid 3px" ref={initialRef} onChange={(e) => setEmail(e.target.value)}/>
            </FormControl>
          </ModalBody>
          <Button disabled={email===''} colorScheme="pink" width="90%" borderRadius={""} m="auto" onClick={loginUser}>
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
        </>)
 
  
}
