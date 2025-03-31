import React from 'react'
import styled from 'styled-components'
import Navbar from '../componenets/Navbar'
import Announcement from '../componenets/Announcement'
import Slider from '../componenets/Slider'
import Categories from '../componenets/categories'
import Products from "../componenets/Products"
import Newsletter from "../componenets/Newsletter"
import Footer from "../componenets/Footer"

const container = styled.div`
  height: 60px;
  background-color: black;
`

const Home = () => {
  return (
    <div>
        <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories />
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
