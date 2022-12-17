// import { Button } from '@chakra-ui/react';
import { Alert, AlertIcon, Box } from '@chakra-ui/react';
import  { useContext } from 'react'
// import { Navigate } from 'react-router-dom';
// import HomePage from '../Components/HomePage';
// import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider'

const PrivateRoute = ({children}) => {
    const { authState } = useContext(AuthContext);
    
    if(!authState) {
 return (<Box display={'flex'} justifyContent='center' m='auto' width='200px'> <Alert status='error'>
 <AlertIcon />
 Please Login First
</Alert>
</Box>
)
    }
  return children;
}

export default PrivateRoute
