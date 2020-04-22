import React, { useEffect } from "react"
import PropTypes from "prop-types"
import axios from "axios";
import { useStateValue } from "../context/StateContextProvider"

import "./layout.scss"

const Layout = ({ children }) => {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    axios.get('/api/places?typeId=region')
      .then(function ({ data }) {
        // handle success
        const markers = data.data.map(x => {
          const marker = {};

          marker.coordinates = (x.location) ? x.location.coordinates.slice().reverse() : [];
          marker.value = x.latestData.cases;
          marker.id = x.id;
          marker.latestData = x.latestData;
          return marker;
        });
        dispatch({ type: "Markers", payload: markers })
      });
  }, [dispatch]);


  return (
    <>
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
