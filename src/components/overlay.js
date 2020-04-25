import React, { useState } from 'react';

import { getTop5Markers } from '../context/selectors';
import { useStateValue } from "../context/StateContextProvider"
import Blur from './ui/blur';
import EnternalLink from './ui/external-link';

function Overlay() {
    const [state, dispatch] = useStateValue();
    const [showAbout, setShowAbout] = useState(false);
    const { start, focusedMarker } = state;
    const top5Markers = getTop5Markers(state);
    return  (
            <Blur
                className="overlay"
                config={{ duration: 100 }}
                shown={start && !focusedMarker}>
                <div className="header">
                    <div>
                        <h2>Covid 19 Globe</h2>
                        <div className="overlay-subtitle">
                            Visualizing <b>Corona Virus Desease </b> Data with{' '}
                            <EnternalLink value="REACT_GLOBE" label="react-globe" /> and{' '}
                            <EnternalLink value="CRONA_TAB" label="corona-tab-api" />
                        </div>
                    </div>
                    <div>
                        <a
                            href="#"
                            onClick={() => setShowAbout(true)}
                            style={{ marginRight: 24 }}>
                            About
          </a>
                        <EnternalLink value="GITHUB_REPO" label="Github" />
                    </div>
                </div>
                <div className="content">
                    TOP 5 AFFACTED REGIONS
        {top5Markers.map(
                    (marker) => {
                        return (
                            <a key={marker.city} href="#">
                                <h2
                                    onClick={() =>
                                        dispatch({ type: "Focus", payload: marker })
                                    }>
                                    {marker.city} ({marker.value})
                                </h2>
                            </a>
                        );
                    },
                )}
                </div>
                <div className="footer">
                    
                </div>
            </Blur>
        );
}

export default Overlay;