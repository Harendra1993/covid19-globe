import React, { useState, useEffect } from "react"

// import { Link } from "gatsby"
import axios from "axios";
import Globe from "../components/globe";
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    axios.get('/api/places?typeId=region')
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      })
  }, []);
  return (
    < Layout >
      <SEO title="Home" />
      <Globe />
    </Layout >
  )
}

export default IndexPage
