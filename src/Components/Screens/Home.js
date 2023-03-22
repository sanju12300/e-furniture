import React from 'react'
import { Categories } from '../Categories'
import { Featured } from '../Featured'
import { Footer } from '../Footer'
import { Navbar } from '../Navbar'
import { Offer } from '../Offer'
import { Products } from '../Products'
import { Products2 } from '../Products2'
import { Subscribe } from '../Subscribe'
import { Topbar } from '../Topbar'
import { Vendor } from '../Vendor'


export const Home = () => {
  return (
    <div>
       <Topbar/>
      <Navbar/>
      <Featured/>
      <Categories/>
      <Offer/>
      <Products/>
      <Subscribe/>
      <Products2/>
      <Vendor/>
      <Footer/> 
    </div>
  )
}
