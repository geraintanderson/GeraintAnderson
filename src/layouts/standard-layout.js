import React from 'react'
import { Helmet } from 'react-helmet'

import GlobalStyles from '../components/global-styles'
import { colours, harmonics } from '../helpers/style-helpers'
import SiteMenu from '../components/site-menu'

const backgroundFaded = colours.background.substr(0, colours.background.length-2) + '0)'
const linearGradient = `linear-gradient(to bottom, ${colours.background} 0%, ${colours.background} 70%, ${backgroundFaded} 100%)`

export default ({children}) => {
  console.log(linearGradient)
  return (
    <React.Fragment>
      <div style={{ width: '100%', height: harmonics.h4, position: 'fixed', top: 0, left: 0, backgroundImage: linearGradient }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Geraint Anderson</title>
        </Helmet>
        <GlobalStyles></GlobalStyles>
        <SiteMenu></SiteMenu>
      </div>
      <div>
        <article style={{ margin: `${harmonics.h4} auto`, maxWidth: '80ch' }}>
          {children}
        </article>
      </div>
    </React.Fragment>
  )
}