import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Ulhas | Home" />
    <div className="bg-white rounded-lg p-6">
      <p>I'm Ulhas. It's a pleasure to meet you.</p>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
