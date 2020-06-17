import axios from "axios";

export const fetchPlayers = (country_id) => {
  return dispatch => {
    dispatch({ type: "PLAYERS_FETCH_PENDING" });

    axios.get(`https://cricket.sportmonks.com/api/v2.0/players?filter[country_id]=${country_id}&api_token=AtaKaIInIZ10q7nKOuvv72iYacZ32kC3MxAn6bHqwddytlWsoi347HSGyKz4`).then(res => {
      dispatch({ type: "PLAYER_FETCH_SUCCESS", players: res.data.data });
    });
  };
};


// export const fetchFixtures = () => {
//   return dispatch => {
//     dispatch({ type: "FIXTURES_FETCH_PENDING" });

//     axios.get("https://cricket.sportmonks.com/api/v2.0/fixtures?api_token=AtaKaIInIZ10q7nKOuvv72iYacZ32kC3MxAn6bHqwddytlWsoi347HSGyKz4").then(res => {
//       dispatch({ type: "FIXTURES_FETCH_SUCCESS", fixtures: res.data.data });
//     });
//   };
// };


export const fetchFixtures = () => {
  return dispatch => {
    dispatch({ type: "FIXTURES_FETCH_PENDING" });

    axios.get("http://cricket.sportmonks.com/api/v2.0/fixtures?api_token=AtaKaIInIZ10q7nKOuvv72iYacZ32kC3MxAn6bHqwddytlWsoi347HSGyKz4&&filter[starts_between]=2019-10-01,2019-10-30&include=league,season,runs,venue,localteam,visitorteam&sort=starting_at").then(res => {
      dispatch({ type: "FIXTURES_FETCH_SUCCESS", fixtures: res.data.data});
    });
  };
};

export const fetchLiveScores = () => {
  return dispatch => {
    dispatch({ type: "LIVESCORE_FETCH_PENDING" });

    axios.get("http://cricket.sportmonks.com/api/v2.0/fixtures?api_token=AtaKaIInIZ10q7nKOuvv72iYacZ32kC3MxAn6bHqwddytlWsoi347HSGyKz4&&filter[starts_between]=2019-10-01,2019-10-30&include=league,season,runs,venue,localteam,visitorteam&sort=starting_at").then(res => {
      dispatch({ type: "LIVESCORE_FETCH_SUCCESS", livescores: res.data.data});  
    });
  };
};

export const fetchCountries = () => {
  return dispatch => {
    dispatch({ type: "COUNTRIES_FETCH_PENDING" });

    axios.get("https://cricket.sportmonks.com/api/v2.0/countries/?api_token=AtaKaIInIZ10q7nKOuvv72iYacZ32kC3MxAn6bHqwddytlWsoi347HSGyKz4").then(res => {
      dispatch({ type: "COUNTRIES_FETCH_SUCCESS", countries: res.data.data });
    });
  };
};