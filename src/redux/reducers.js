const initialState = {
    loading: false,
    players: null,
    fixture: { loading: false, fixtures: null },
    country :{loading: false, countries: null},
  };
  
  const playersReducer = (state = initialState, action) => {
    switch (action.type) {
      case "PLAYER_FETCH_PENDING":
        return { ...state, loading: true, players: null };
      case "PLAYER_FETCH_SUCCESS":
        return { ...state, loading: false, players: action.players };
      case "FIXTURES_FETCH_PENDING":
        return { ...state, fixture: { loading: true, fixtures: null } };
      case "FIXTURES_FETCH_SUCCESS":
        return { ...state, fixture: { loading: false, fixtures: action.fixtures } }; 
      case "COUNTRIES_FETCH_PENDING":
        return { ...state, country: { loading: true, countries: null } };
      case "COUNTRIES_FETCH_SUCCESS":
        return { ...state, country: { loading: false, countries: action.countries } }; 
      default:
        return { ...state };
    }
  };
  
  export default playersReducer;
  