import React from 'react';

import { getRandomMarker } from '../context/selectors';
import { useStateValue } from '../context/StateContextProvider';
import Blur from './ui/blur';
import Button from './ui/button';

function getSearchURL(city, country) {
    const formattedQuery = `${encodeURIComponent(city)}, ${encodeURIComponent(
        country,
    )} `.replace(/(%20| )/g, '+');
    return `https://www.google.com/search?q=${formattedQuery}`;
}

function Details() {
    const [state, dispatch] = useStateValue();
    const { start, focusedMarker } = state;
    const randomMarker = getRandomMarker(state);
    if (!focusedMarker) {
        return <div />;
    }
    const { city, countryCode, countryName, value, dataSource } = focusedMarker;
    const url = getSearchURL(city, countryName);
    // const relatedTopics = state.relatedTopics[countryCode];
    // console.log(relatedTopics);
    return (
        <Blur className="details" config={{ duration: 1000 }} shown={start}>
            <div className="header">
                <Button
                    label="Back to globe"
                    onClick={() => dispatch({ type: "Focus" })}
                />
                <Button
                    label="Random City"
                    onClick={() =>
                        dispatch({ type: "Focus", payload: randomMarker })
                    }
                />
            </div>
            <div className="content">
                <h2>
                    {city}, {countryName} ({value})
        </h2>

                {/* <div className="details-content">
                    RELATED TOPICS
          {relatedTopics.map(
                    ({ topic, link }) => {
                        return (
                            <a
                                key={topic}
                                href={`https://trends.google.com${link}`}
                                rel="noopener noreferrer"
                                target="_blank">
                                {topic}
                            </a>
                        );
                    },
                )}
                </div> */}
                <a href={dataSource} rel="noopener noreferrer" target="_blank">
                    <Button label="Verify Data Source" />
                </a>
            </div>
        </Blur>
    );
}

export default Details;