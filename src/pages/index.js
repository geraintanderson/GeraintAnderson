import React from "react"

import Layout from '../layouts/splash-layout'
import { harmonics } from '../helpers/style-helpers'

export default () => {
  return (
    <Layout>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
        <h1 style={{ fontSize: harmonics.h4 }}>Geraint Anderson</h1>
        <h2 style={{ fontSize: harmonics.h2 }}>Developer, Problem Solver, Outdoor Enthusiast</h2>
      </div>
    </Layout>
  )
}