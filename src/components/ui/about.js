import React from 'react';

import Blur from './blur';
import Button from './button';
import ExternalLink from './external-link';


function About({ onHide, shown }){
    console.log(shown)
  return (
    <Blur className="about" config={{ friction: 150 }}  shown={shown}>
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
        <Button label="Back" onClick={onHide} />
      </div>
    </Blur>
  );
}

export default About;