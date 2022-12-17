import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Components/HomePage';
import Login from '../Components/Login';
import Sale from '../Components/Sale';
import PrivateRoute from './PrivateRoute';

const AllRoutes = () => {
  return (
    <div>
    <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/sale' element={<PrivateRoute><Sale/></PrivateRoute>}/>
    <Route path='/login' element={<Login/>}/>

    </Routes>
    </div>
  )
}

export default AllRoutes
