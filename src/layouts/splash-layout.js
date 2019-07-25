import React from 'react'
import { Helmet } from 'react-helmet'

import penYFan from '../images/pen-y-fan.png'
import codeSample from '../images/code-sample.png'
import SiteMenu from '../components/site-menu'
import GlobalStyles from '../components/global-styles'
import { colours } from '../helpers/style-helpers'


export default ({ children }) => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0 }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Geraint Anderson</title>
      </Helmet>
      <GlobalStyles></GlobalStyles>
      <img style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, objectFit: 'cover' }} src={codeSample} alt="Code Sample" />
      <img style={{ width: '100%', height: '100%', position: 'absolute', bottom: 0, right: 0, objectFit: 'cover' }} src={penYFan} alt="Pen Y Fan" />
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: colours.background, opacity: 0.5 }}></div>
      
      <SiteMenu></SiteMenu>
      
      {children}
    </div>
  )
}
