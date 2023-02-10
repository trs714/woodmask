import * as React from "react"
import Header from "../components/blocks/header"
import { Box } from "theme-ui"

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}
const linkStyle = {
  color: 'inherit',
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
  textDecoration: 'none'
}
const descriptionStyle = {
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const links = [
  {
    text: "簿記",
    url: "/bookkeeping/",
    description: "簿記2級の学習について"
  },
]

const IndexPage = () => {
  return (
    <>
    <Header/>
    <main>
      <Box sx={{p:[24,48,96]}}>
        <ul style={listStyles}>
          {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>))}
        </ul>
      </Box>
    </main>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
