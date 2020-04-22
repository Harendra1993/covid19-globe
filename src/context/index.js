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