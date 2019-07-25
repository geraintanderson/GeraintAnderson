import React from 'react'
import { css } from '@emotion/core'
import { graphql, Link } from 'gatsby'

import Layout from '../layouts/standard-layout'

export default ({ data }) => (
  <Layout>
    <h1>Articles</h1>
    <section>
      <p>This is blog-esque. I'm not recording my thoughts at a snapshot of time and fully intend on revisiting past work to update the content as the world moves on. Therefore, I'm showing you the last updated date rather than the published date. Think of it as a "correct as of" timestamp.</p>

      {/* TODO Use stack layout */}
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          {/* XXX Get rid of the css styles on Link..? */}
          <Link
            to={node.fields.slug} 
            css={css`
              text-decoration: none;
              color: inherit;
            `}
          >
            <h3>{node.frontmatter.title}{" "}
            {/* TODO Pick a better colour and style for the date... */}
            {/* TODO Show an image for each article */}
            <span css={css`
              color: #bbb
            `}>- Last Modified: {node.frontmatter.modifiedDate}</span></h3>
            {/* XXX We only need to show the last modified date here. The published date can be included in the article page itself */}
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}

    </section>
  </Layout>
)

export const query = graphql`
query {
	allMarkdownRemark {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          createdDate(formatString: "DD MMMM, YYYY")
          modifiedDate(formatString: "DD MMMM, YYYY")
        }
        fields {
          slug
        }
        excerpt,
      }
    }
  }
}
`