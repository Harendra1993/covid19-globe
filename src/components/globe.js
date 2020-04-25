import React from "react"
import ReactGlobe from "./vendor/react-globe"
import { useStaticQuery, graphql } from "gatsby"
import { useStateValue } from "../context/StateContextProvider"

import Blur from "./ui/blur"

const Globe = () => {
  const [state, dispatch] = useStateValue()
  const { focusedMarker, start } = state
  const markers = start ? state.markers : []
  const focus =
    focusedMarker !== undefined ? focusedMarker.coordinates : undefined
  // console.log(state)

  const { site } = useStaticQuery(graphql`
    query SiteGlobeOptionsQuery {
      site {
        siteMetadata {
          cameraOptions {
            enableZoom
          }
          focusOptions {
            enableDefocus
          }
          globeOptions {
            cloudsSpeed
            cloudsOpacity
            glowCoefficient
            glowColor
            glowPower
            glowRadiusScale
            texture
          }
          lightOptions {
            ambientLightColor
            ambientLightIntensity
            pointLightIntensity
          }
        }
      }
    }
  `)
  const {
    cameraOptions,
    focusOptions,
    globeOptions,
    lightOptions,
  } = site.siteMetadata

  return (
    <Blur className="globe" config={{ friction: 150 }} shown={true}>
      <ReactGlobe
        cameraOptions={cameraOptions}
        focus={focus}
        focusOptions={focusOptions}
        globeOptions={globeOptions}
        lightOptions={lightOptions}
        markers={markers}
        //markerOptions={markerOptions}
        onClickMarker={marker => dispatch({ type: "Focus", payload: marker })}
      />
    </Blur>
  )
}

export default Globe
