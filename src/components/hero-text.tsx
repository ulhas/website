import React from 'react'

import {IntrinsicProps} from '../shared/classes'

const HeroText = ({className}: IntrinsicProps) => (
  <div className={className}>
    <h1 className="text-5xl font-extrabold tracking-tighter">
      ULHAS
    </h1>
    <p className="text-gray-700 text-lg font-light leading-loose">I am a <strong>software engineer and a mentor</strong>. Currently, I work as CTO at Procedure Tech, a company which I co-founded.
      Previously, I have worked in multiple startups including HyperTrack and Opentable.</p>
  </div>
)

export default HeroText

