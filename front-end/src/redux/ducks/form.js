const FORM = "form";
const initialState = { isSubmitted: false };

//ACTIONS
export const form = () => {
  return { type: FORM };
};

//REDUCER
const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM:
      return { ...state, isSubmitted: !state.isSubmitted };
    default:
      return state;
  }
};

export default formReducer;
