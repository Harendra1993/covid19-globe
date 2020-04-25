import React from "react"

const links = {
  GITHUB_REPO: "https://github.com/harendra1993/covid19-globe",
  JAMSTACK: "https://jamstack.org/",
  GATSBY: "https://www.gatsbyjs.org/",
  REACT: "https://reactjs.org/",
  REACT_GLOBE: "https://metoorising.withgoogle.com/",
  CRONA_TAB:
    "https://github.com/PotentialWeb/CoronaTab/wiki/RESTful-API-documentation",
}

function EnternalLink({ value, label }) {
  return (
    <a href={links[value]} rel="noopener noreferrer" target="_blank">
      {label}
    </a>
  )
}

export default EnternalLink
