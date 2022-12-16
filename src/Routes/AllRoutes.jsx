import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Components/HomePage';
import Login from '../Components/Login';
import Sale from '../Components/Sale';

const AllRoutes = () => {
  return (
    <div>
    <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/sale' element={<Sale/>}/>
    <Route path='/login' element={<Login/>}/>

    </Routes>
    </div>
  )
}

export default AllRoutes
