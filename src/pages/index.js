import React from "react"

// import { Link } from "gatsby"
import Layout from "../components/layout"
import Globe from "../components/globe";
import Intro from "../components/intro";
import SEO from "../components/seo"

const IndexPage = () => {
  // Similar to componentDidMount and componentDidUpdate:

  return (
    < Layout >
      <SEO title="Home" />
      <Globe />
      <Intro />
    </Layout >
  )
}

export default IndexPage
