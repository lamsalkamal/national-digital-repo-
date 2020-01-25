import { SET_SEARCH_DOC_INPUT } from "../actions/types";

const initialState = {
  options: {
    universities: ["Trivuban University", "Kathmandu University"],
    campuses: ["Campus 1", "Campus 2"],
    subjects: ["Science", "Mathematics", "Biology"]
  },
  value: {
    university: "",
    campus: "",
    subject: ""
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SEARCH_DOC_INPUT:
      return {
        ...state,
        value: { ...state.value, [payload.name]: payload.value }
      };

    default:
      return state;
  }
};
