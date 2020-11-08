import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/hero-section"
import Navigation from "../components/navigation"

const IndexPage = () => (
  <Layout>
    <SEO title="Ulhas | Home" />
    <Navigation />
    <HeroSection />
  </Layout>
)

export default IndexPage
