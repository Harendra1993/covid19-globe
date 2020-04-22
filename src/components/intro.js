import React from 'react';

import { useStateValue } from "../context/StateContextProvider"
import Blur from './ui/blur';
import Button from './ui/button';

function Intro() {
    const [{ start }, dispatch] = useStateValue();
    return (
        <Blur className="intro" config={{ friction: 50 }} shown={!start}>
            <h1>Covid 19 Globe</h1>
            <p>
                Visualizing <b>Corona Virus Desease </b> Data
                {/* with{' '}
                <Link value="REACT_GLOBE_GITHUB" label="react-globe" /> */}
            </p>
            <Button
                label="Explore"
                onClick={() => dispatch({ type: "Start" })}
            />
        </Blur>
    );
}

export default Intro;