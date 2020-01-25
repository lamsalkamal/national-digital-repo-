import {
  UPLOAD_THESIS_PREV,
  UPLOAD_THESIS_NEXT,
  SET_INSTITUTION_INFO_INPUT,
  SET_AUTHOR_INFO_INPUT,
  SET_THESIS_INFO_INPUT,
  SET_UPLOAD_INFO_INPUT,
  CONFIRM_THESIS_UPLOAD,
  SHOW_SELECTED_UPLOAD_FORM
} from "../actions/types";

const initialState = {
  showForm: 1,
  institutionInfo: {
    universityName: "",
    campusName: "",
    location: "",
    startYear: "",
    endYear: "",
    authorName: "",
    coAuthorName: "",
    defenseDate: "",
    approvalDate: "",
    supervisorName: "",
    coSupervisorName: ""
  },
  authorInfo: {
    firstName: "",
    middleName: "",
    lastName: "",
    address: "",
    district: "",
    municipality: "",
    ward: "",
    tole: "",
    house: "",
    email: "",
    mobile: ""
  },
  thesisInfo: {
    title: "",
    abstract: "",
    reference: "",
    keyword1: "",
    keyword2: "",
    keyword3: "",
    keyword4: "",
    keyword5: "",
    keyword6: "",
    fund: ""
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPLOAD_THESIS_NEXT:
      return { ...state, showForm: state.showForm + 1 };

    case UPLOAD_THESIS_PREV:
      return { ...state, showForm: state.showForm - 1 };

    case SHOW_SELECTED_UPLOAD_FORM:
      return { ...state, showForm: payload };

    case SET_INSTITUTION_INFO_INPUT:
      return {
        ...state,
        institutionInfo: {
          ...state.institutionInfo,
          ...payload
        }
      };

    case SET_AUTHOR_INFO_INPUT:
      return {
        ...state,
        authorInfo: {
          ...state.authorInfo,
          ...payload
        }
      };

    case SET_THESIS_INFO_INPUT:
      return {
        ...state,
        thesisInfo: {
          ...state.thesisInfo,
          ...payload
        }
      };

    case SET_UPLOAD_INFO_INPUT:
      return {
        ...state,
        uploadInfo: {
          ...state.uploadInfo,
          ...payload
        }
      };

    case CONFIRM_THESIS_UPLOAD:
      alert("implement upload here");

      return state;

    default:
      return state;
  }
};
