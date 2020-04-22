import moment from 'moment';
import React, { useState } from 'react';

import { getTop10Markers } from '../context/selectors';
import { useStateValue } from "../context/StateContextProvider"
// import About from './About';
import Blur from './ui/blur';
// import Link from './ui/Link';

function Overlay() {
    const [state, dispatch] = useStateValue();
    const [showAbout, setShowAbout] = useState(false);
    const { lastUpdated, start, focusedMarker } = state;
    const top10Markers = getTop10Markers(state);
    return showAbout ? (
        // <About onHide={() => setShowAbout(false)} shown={showAbout} />
        <div></div>
    ) : (
            <Blur
                className="overlay"
                config={{ duration: 1000 }}
                shown={start && !focusedMarker}>
                <div className="header">
                    <div>
                        <h2>Covid 19 Globe</h2>
                        <div className="overlay-subtitle">
                            Visualizing <b>Corona Virus Desease </b> Data
                         {/* with{' '}
                            <Link value="REACT_GLOBE_GITHUB" label="react-globe" /> */}
                        </div>
                    </div>
                    {/* <div>
                        <a
                            href="#"
                            onClick={() => setShowAbout(true)}
                            style={{ marginRight: 24 }}>
                            About
          </a>
                        <Link value="GITHUB_REPO" label="Github" />
                    </div> */}
                </div>
                <div className="content">
                    TOP 10 AFFACTED REGIONS
        {top10Markers.map(
                    (marker) => {
                        return (
                            <a key={marker.name} href="#">
                                <h2
                                    onClick={() =>
                                        dispatch({ type: "Focus", payload: marker })
                                    }>
                                    {marker.name} ({marker.value})
                                </h2>
                            </a>
                        );
                    },
                )}
                </div>
                <div className="footer">
                    {/* Updated on {moment(lastUpdated).format('MMM D, YYYY')} */}
                </div>
            </Blur>
        );
}

export default Overlay;