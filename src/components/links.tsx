import React from 'react'

import {Link} from 'gatsby'

import {IntrinsicProps} from '../shared/classes'

const Links = ({className}: IntrinsicProps) => (
  <ul className={`${className} text-2xl font-extrabold`}>
    <li className="lg:inline px-6 text-gray-700 hover:text-gray-900">
      <Link to="/about">ABOUT</Link>
    </li>
    <li className="lg:inline px-6 text-red-500 hover:text-red-800">
      <a href="https://bit.ly/rbrdk">YOUTUBE</a>
    </li>
    <li className="lg:inline px-6 text-blue-500 hover:text-blue-800">
      <a href="https://twitter.com/ulhas_sm">TWITTER</a>
    </li>
  </ul>
)

export default Links
