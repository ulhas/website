import React from "react"

import HeroImage from './hero-image'
import HeroText from './hero-text'

const HeroSection = () => (
  <div className="md:flex md:place-content-center">
    <HeroText className="md:w-1/4 sm:w-full" />
    <HeroImage className="md:w-1/4 sm:w-full" />
  </div>
)

export default HeroSection
