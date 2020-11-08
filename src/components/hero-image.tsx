import React from "react"

import {useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

import {IntrinsicProps} from '../shared/classes'


const HeroImage = ({className}: IntrinsicProps) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fixed) {
    return <div className={className}>Picture not found</div>
  }

  return (
    <div className={className}>
      <Img fixed={data.placeholderImage.childImageSharp.fixed} />
    </div>
  )
}

export default HeroImage
