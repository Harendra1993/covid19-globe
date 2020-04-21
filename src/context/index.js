
// if(service.status=="loaded")
// {
//   const markers=service.payload.map(x => {
//     const container={latestData:{cases:0,date:"",deaths:0,recovered:0}};

//     container.coordinates=(x.location)?x.location.coordinates:[];
//     container.value=x.latestData.cases;
//     container.id=x.id;
//     container.latestData=x.latestData;
//    // container.
//     return container;
//   });
//   const initialState= {
//     lastUpdated: 1,
//     markers: markers,
//     start: false,
// };
// }

export const initialState = {
    lastUpdated: 321,
    markers: [],
    start: false,
};

export function reducer(state, action) {
    const { type } = action;
    switch (type) {
        case "Markers":
            return {
                ...state,
                markers: action.payload,
            };
        case "Start":
            return {
                ...state,
                start: true,
            };
        case "Focus":
            return {
                ...state,
                focusedMarker: action.payload,
            };
        default:
            return state;
    }
}