
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Login from './components/Login'
import Register from './components/Register'
import NotFound from './components/NotFound'
import HomePage from './components/HomePage'
import Detail from './components/Detail'
import Product from './components/Product'
import Admin from './components/Admin'
import Account from './components/Account'
import CustomLink from './components/CustomLink'
import Userdetail from './components/Userdetail'
import ListUser from './components/ListUser'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}>
            <Route path='home' element={<HomePage/>}/>
            <Route path='contact' element={<Contact/>} />
        </Route>
        <Route path='/' element={<Home/>}>
            <Route path='home' element={<HomePage/>}/>
            <Route path='detail' element={<Detail />}/>
            <Route path='product' element={<Product/>}/>
        </Route>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Register' element={<Register />}/>
        <Route path='*' element={<NotFound />}/>
        <Route path='/' element={<Home/>}>
            
          <Route path='admin' element={<Admin/>}/>
          <Route path='account' element={<Account />}/>
        </Route>
        <Route path='custumLink' element={<CustomLink />}/>
        <Route path='/homepage' element={<HomePage/>}/>
        <Route path='/user-detail/:id' element={<Userdetail/>}/>
        <Route path='/listUser' element={<ListUser/>}/>
      </Routes>
    </div>
  )
}
