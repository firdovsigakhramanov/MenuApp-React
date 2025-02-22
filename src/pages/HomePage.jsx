import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Sidebar from '../components/Sidebar'
import Slider from 'react-slick'
import SimpleSlider from '../components/SimpleSlider'
import MenuBlock from '../components/MenuBlock'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <SimpleSlider />
      <MenuBlock />
    </div>
  )
}

export default HomePage