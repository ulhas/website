import React from "react"

import SEO from "../components/seo"
import HeroSection from "../components/hero-section"

const IndexPage = () => (
  <div className="flex h-screen font-sans">
    <SEO title="Home" />
    <HeroSection />
  </div>
)

export default IndexPage
