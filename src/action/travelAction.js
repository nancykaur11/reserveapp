import axios from "axios";
console.log("state");

export const setFromState = fromState => ({ type: 'SET_FROM_STATE', payload: fromState });
export const setToState = toState => ({ type: 'SET_TO_STATE', payload: toState });
export const setSelectedDate = selectedDate => ({ type: 'SET_SELECTED_DATE', payload: selectedDate });
export const setTrips = trips => ({ type: 'SET_TRIPS', payload: trips });
export const setSelectedTrips = selectedTrip => ({ type: 'SETECTED_TRIP', payload: selectedTrip });
export const setSelectedSeats = selectedSeats => ({ type: 'SET_SELECTED_SEATS', payload: selectedSeats });
