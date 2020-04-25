import React, { useEffect } from "react"
import axios from "axios"

// import { Link } from "gatsby"
import { useStateValue } from "../context/StateContextProvider"
import Layout from "../components/layout"
import Globe from "../components/globe"
import Intro from "../components/intro"
import Overlay from "../components/overlay"
import Details from "../components/details"
import SEO from "../components/seo"

const IndexPage = () => {
  const [state, dispatch] = useStateValue()

  useEffect(() => {
    axios.get("/api/places?typeId=country").then(function ({ data }) {
      // handle success
      const markers = data.data.map(x => {
        const marker = {}

        marker.coordinates = x.location
          ? x.location.coordinates.slice().reverse()
          : []
        marker.value = x.latestData.cases
        marker.id = x.id
        marker.latestData = x.latestData
        marker.population = x.population
        marker.hospitalBedOccupancy = x.hospitalBedOccupancy
        marker.hospitalBeds = x.hospitalBeds
        marker.icuBeds = x.icuBeds
        marker.population = x.population
        marker.dataSource = x.dataSource
        marker.parentId = x.parentId
        marker.typeId = x.typeId
        marker.countryName = x.name
        marker.countryCode = x.alpha2code
        return marker
      })
      dispatch({ type: "Markers", payload: markers })
    })
  }, [dispatch])

  return (
    <Layout>
      <SEO title="Home" />
      <Globe />
      <Intro />
      <Overlay />
      <Details />
    </Layout>
  )
}

export default IndexPage
