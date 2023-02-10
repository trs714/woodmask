import * as React from 'react'
import { graphql } from 'gatsby'
import { Box } from "theme-ui"
import Header from "../../components/blocks/header"

const BlogPost = ({ data, children }) => {
  return (
    <>
      <Header/>
      <Box sx={{p:[24,48,96]}}>
      {children}
      </Box>
    </>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head = ({ data }) => <title>{data.mdx.frontmatter.title}</title>

export default BlogPost
