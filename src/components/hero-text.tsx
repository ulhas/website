import React from 'react'

import {IntrinsicProps} from '../shared/classes'

const HeroText = ({className}: IntrinsicProps) => (
  <div className={className}>
    <h1 className="text-5xl font-extrabold tracking-tighter">
      ULHAS
    </h1>
    <p className="text-gray-700 text-lg font-light leading-loose">I am a <strong className="font-extrabold">software engineer and a mentor</strong>. Currently, I work as CTO at
      <a href="https://procedure.tech" className="text-blue-500 hover:text-blue-700"> Procedure</a>, a company which I co-founded.
      Previously, I have been an early stage engineer in multiple startups including
      <a href="https://www.hypertrack.com" className="text-blue-500 hover:text-blue-700"> HyperTrack </a>
      and <a href="https://www.opentable.com" className="text-blue-500 hover:text-blue-700"> Opentable</a>.</p>
  </div>
)

export default HeroText

