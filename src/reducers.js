import {
  INCREMENT_SLIDE,
  DECREMENT_SLIDE,
} from './actions';

const initialState = {
  appName: 'Redux Walkthrough',
  slide: 1,
  numberOfSlide: 10,
};

export default (state = initialState, action) => {
  const actions = {
    [INCREMENT_SLIDE]: {
      slide: state.slide < initialState.numberOfSlide ? state.slide + 1 : state.slide,
    },
    [DECREMENT_SLIDE]: {
      slide: state.slide > initialState.slide ? state.slide - 1 : state.slide,
    },
  };
  
  return {
    ...state,
    ...actions[action.type]
  };
};
