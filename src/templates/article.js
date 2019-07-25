import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts/standard-layout'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <h1>{ post.frontmatter.title }</h1>
      <div>
        First published on { post.frontmatter.createdDate }
        <br/>
        Last updated on { post.frontmatter.modifiedDate }
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        createdDate(formatString: "DD MMMM, YYYY")
        modifiedDate(formatString: "DD MMMM, YYYY")
      }
    }
  }
`