import React from "react"

// import { Link } from "gatsby"
import Globe from "../components/globe";
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  // Similar to componentDidMount and componentDidUpdate:

  return (
    < Layout >
      <SEO title="Home" />
      <Globe />
    </Layout >
  )
}

export default IndexPage
