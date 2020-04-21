import React,{useEffect} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import axios from "axios";
import {useStateValue} from "../context/StateContextProvider"

// import Header from "./header"
import "./layout.scss"

const Layout = ({ children }) => {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    axios.get('/api/places?typeId=region')
    .then(function (response) {
      // handle success
      dispatch({ type: "Markers", payload: response.data })
    });
  }, []);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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
