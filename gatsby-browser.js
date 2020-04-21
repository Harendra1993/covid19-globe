/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import { initialState, reducer } from './src/context/';
import StateContextProvider from "./src/context/StateContextProvider"

export const wrapRootElement = ({ element }) => {
  return <StateContextProvider initialState={initialState} reducer={reducer}>{element}</StateContextProvider>
}