import React from "react"

import Layout from "../components/layout"
import HeroImage from "../components/hero-image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Ulhas | Home" />
    <div className="bg-red-100 rounded-lg p-2">
      <p>I'm Ulhas. It's a pleasure to meet you.</p>
      <HeroImage />
    </div>
  </Layout>
)

export default IndexPage
