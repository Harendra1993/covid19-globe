import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import axios from "axios";

import Layout from "../components/layout"
import Image from "../components/image"
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
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout >
  )
}

export default IndexPage
