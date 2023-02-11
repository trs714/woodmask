import * as React from "react"
import { graphql } from "gatsby"
import { Link, Grid, Card, Box } from "theme-ui"
import Header from "../../components/blocks/header"

const Bookkeeping = ({data}) => {
  return (
    <>
    <Header />
    <main>
    <Box sx={{p:[24,48,96]}}>
      <Grid gap={0} columns={[1, 2, 3]}>
      {
        data.allMdx.edges.map(edge => (
          <Link
            href={`/bookkeeping/${edge.node.frontmatter.slug}`}
            sx={{
              color: 'text',
              textDecoration: 'none'
            }}
          >
            <Card key={edge.node.id} sx={{
              '&:hover' : {
                bg: 'highlight'
              },
              p: 4,
              }}>
              <h2>
                {edge.node.frontmatter.title}
              </h2>
              <p>Posted: {edge.node.frontmatter.date}</p>
            </Card>
          </Link>
        ))
      }
      </Grid>
    </Box>
    </main>
    </>
  )
}

export const query = graphql`
  query {
    allMdx (sort: {frontmatter: {date: DESC}}) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "YYYY年M月D日")
            title
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  }
`

export default Bookkeeping

export const Head = () => <title>簿記</title>
