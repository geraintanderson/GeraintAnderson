// Because I have more than one layout file, I need to create the global styles as a component that can be imported into each layout.

import React from 'react'
import { Global, css } from '@emotion/core'
import { colours, harmonics } from '../helpers/style-helpers'

export default () => (
  <Global
    styles={css`
      body {
        background-color: ${colours.background};
        color: ${colours.main};
      }
      h1 {
        font-size: ${harmonics.h4};
      }
      h2 {
        font-size: ${harmonics.h3};
      }
      h3 {
        font-size: ${harmonics.h2};
      }
      p {
        line-height: 1.5rem;
      }
      a {
        font-style: italic;
      }
      a:link {
        color: ${colours.loudEmphasis};
        text-decoration: none;
      }
      a:visited {
        color: ${colours.loudEmphasis};
        text-decoration: none;
      }
      a:hover {
        font-weight: bolder;
        color: ${colours.neutralEmphasis};
        text-decoration: none;
      }
      a:active {
        color: ${colours.subtleEmphasis};
        text-decoration: none;
      }
    `}
  />
)
