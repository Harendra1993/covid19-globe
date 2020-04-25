import React from 'react';

import Layout from "../components/layout"
import Blur from '../components/ui/blur';
import Button from '../components/ui/button';
import ExternalLink from '../components/ui/external-link';


function About(){
  return (
    <Layout>
    <Blur className="about" config={{ friction: 1000 }} >
      <div className="about-content">
        <h2>About</h2>
        <p>
          <ExternalLink value="GITHUB_REPO" label="Covid 19 Globe" /> is a{' '}
          <ExternalLink value="JAMSTACK" label="JAMstack" /> application built without
          any server components. Data is fetched during build time using the{' '}
          <ExternalLink value="CRONA_TAB" label="corona-tab-api" /> library.
          Globe visualizations are rendered using the{' '}
          <ExternalLink value="REACT_GLOBE_GITHUB" label="react-globe" /> component.
        </p>
        <Button label="Back"  />
      </div>
    </Blur>
    </Layout>
  );
}

export default About;