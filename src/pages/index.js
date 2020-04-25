import React, { useEffect } from "react"


// import { Link } from "gatsby"
import Layout from "../components/layout"
import Globe from "../components/globe";
import Intro from "../components/intro";
import Overlay from "../components/overlay";
import Details from "../components/details";
import SEO from "../components/seo"

const IndexPage = () => {
  // Similar to componentDidMount and componentDidUpdate:

  // useEffect(() => {
    
  // }, [dispatch]);


  return (
    < Layout >
      <SEO title="Home" />
      <Globe />
      <Intro />
      <Overlay />
      <Details />
    </Layout >
  )
}

export default IndexPage
