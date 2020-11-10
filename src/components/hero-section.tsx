import React from "react"

import HeroText from './hero-text'
import Links from './links'

const HeroSection = () => (
  <div className="lg:m-auto m-auto mx-4">
    <HeroText />
    <Links className="lg:text-right my-8" />
  </div>
)

export default HeroSection
