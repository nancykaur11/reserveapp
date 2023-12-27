
// import { createStore } from 'redux';
// import rootReducer from './rootReduder';

// const store = createStore(rootReducer);

// export default store;

import { createStore } from 'redux';
import rootReducer from './rootReduder'; // Fix the typo here

const store = createStore(rootReducer);

export default store;

console.log(store.getState(),"initalllll"); // You can add this line to log the initial state if needed

