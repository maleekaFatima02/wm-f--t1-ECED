export const INCREMENT = 'INCREMENT';

export const incrementCount = (newCount) => ({
  type: INCREMENT,
  payload: newCount
});