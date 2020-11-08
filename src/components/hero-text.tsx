import React from 'react'

import {IntrinsicProps} from '../shared/classes'

const HeroText = ({className}: IntrinsicProps) => (
  <div className={className}>
    <h1>Hello there</h1>
    <p>I'm a software engineer with an experience of 10 years</p>
    <p>I am currently the CTO for procedure.tech</p >
    <p>I also live stream code on youtube</p>
    <a
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      href="https://www.youtube.com/channel/UCL6y47WyEA-c5RAa4H8JZDQ"
      target="_blank">Check out my channel</a>
  </div>
)

export default HeroText

