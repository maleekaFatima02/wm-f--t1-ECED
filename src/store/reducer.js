const { INCREMENT } = require('./action');

const initialState = {
  count: 1
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: action.payload};
    default:
      return state;
  }
};