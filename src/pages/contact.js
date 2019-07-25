import React from 'react'

import Layout from '../layouts/splash-layout'
import { harmonics } from '../helpers/style-helpers'

export default () => (
  <Layout>
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', maxWidth: '95vw' }}>
        <h1 style={{ fontSize: harmonics.h4 }}>Geraint Anderson</h1>
        <h2 style={{ fontSize: harmonics.h2 }}>North West England</h2>
        <a style={{ fontSize: harmonics.h2, maxWidth: '95vw' }} href="mailto:geraint@geraintanderson.com">geraint@<wbr/>geraintanderson<wbr/>.com</a>
      </div>
  </Layout>
)
