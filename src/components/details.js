import React from "react"

import { getRandomMarker } from "../context/selectors"
import { useStateValue } from "../context/StateContextProvider"
import Blur from "./ui/blur"
import Button from "./ui/button"

function Details() {
  const [state, dispatch] = useStateValue()
  const { start, focusedMarker } = state
  const randomMarker = getRandomMarker(state)
  if (!focusedMarker) {
    return <div />
  }
  const {
    countryName,
    value,
    dataSource,
    hospitalBeds,
    icuBeds,
    latestData,
    population,
  } = focusedMarker

  return (
    <Blur className="details" config={{ duration: 1000 }} shown={start}>
      <div className="header">
        <Button
          label="Back to globe"
          onClick={() => dispatch({ type: "Focus" })}
        />
        <Button
          label="Random Country"
          onClick={() => dispatch({ type: "Focus", payload: randomMarker })}
        />
      </div>
      <div className="content">
        <h2>
          {countryName} ({value})
        </h2>

        <div class="row">
          <div class="column">
            <div class="card">
              <h3 style={{ color: "red" }}>{latestData.deaths}</h3>
              <p>Deaths</p>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <h3 style={{ color: "green" }}>{latestData.recovered}</h3>
              <p>Recovered</p>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <h3>
                <b>{hospitalBeds ? hospitalBeds : "N/A"}</b>
              </h3>
              <p>Hospital Beds</p>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <h3>{icuBeds ? icuBeds : "N/A"}</h3>
              <p>ICU Beds</p>
            </div>
          </div>
        </div>

        <a href={dataSource} rel="noopener noreferrer" target="_blank">
          <Button label="Verify Data Source" />
        </a>
      </div>
    </Blur>
  )
}

export default Details
