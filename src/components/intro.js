import React from 'react';

import { useStateValue } from "../context/StateContextProvider"
import Blur from './ui/blur';
import Button from './ui/button';
import EnternalLink from './ui/external-link';

function Intro() {
    const [{ start }, dispatch] = useStateValue();
    return (
        <Blur className="intro" config={{ duration: 3000 }} shown={!start}>
            <h1>Covid 19 Globe</h1>
            <p>
                Visualizing <b>Corona Virus Desease </b> Data with{' '}
                <EnternalLink value="REACT_GLOBE" label="react-globe" /> and{' '}
                <EnternalLink value="CRONA_TAB" label="corona-tab-api" />
            </p>
            <Button
                label="Explore"
                onClick={() => dispatch({ type: "Start" })}
            />
        </Blur>
    );
}

export default Intro;