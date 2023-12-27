
const initialState = {
  fromState: '',
  toState: '',
  selectedDate: '',
  trips: null,
  error: null,
  isLoading: false,
  selectedSeats: [],

};


const travelReducer = (state = initialState, action) => {
  console.log('Action:', action.type); 
  switch (action.type) {
    case 'SET_FROM_STATE':
      const newStateFrom = { ...state, fromState: action.payload };
      console.log('New State:', newStateFrom); 
      return newStateFrom;
    case 'SET_TO_STATE':
      const newStateTo = { ...state, toState: action.payload };
      console.log('New State:', newStateTo);
      return newStateTo;
    case 'SET_SELECTED_DATE':
      const newStateDate = { ...state, selectedDate: action.payload };
      console.log('New State:', newStateDate);
      return newStateDate;
      case 'SET_TRIPS':
        const newSTATEtrip={ ...state, trips: action.payload }
        console.log('New State: of trippppp', newSTATEtrip);
         return newSTATEtrip ;
         case 'SETECTED_TRIP':
          const newSelectedTrip = {  ...state,selectedTrip: action.payload };
          
           return newSelectedTrip
      case 'SET_ERROR':
        return { ...state, error: action.payload, isLoading: false };
      case 'SET_LOADING':
        return { ...state, isLoading: action.payload };
        case 'SET_SELECTED_SEATS':
          console.log('New State:-----------', state);
  return { ...state, selectedSeats: action.payload };
    default:
      return state;
  }
};

export default travelReducer;

