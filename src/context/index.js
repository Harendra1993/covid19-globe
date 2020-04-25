import axios from "axios";
let markers=[];
axios.get('/api/places?typeId=country')
      .then(function ({ data }) {
        // handle success
        markers = data.data.map(x => {
          const marker = {};

          marker.coordinates = (x.location) ? x.location.coordinates.slice().reverse() : [];
          marker.value = x.latestData.cases;
          marker.id = x.id;
          marker.latestData = x.latestData;
          marker.dataSource = x.dataSource;
          marker.parentId = x.parentId;
          marker.typeId = x.typeId;
          marker.city = x.name;
          marker.countryCode = x.alpha2code;
          return marker;
        });
      });

export const initialState = {
    lastUpdated: 321,
    markers: markers,
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