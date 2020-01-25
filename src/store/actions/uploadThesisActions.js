import {
  UPLOAD_THESIS_PREV,
  UPLOAD_THESIS_NEXT,
  SET_INSTITUTION_INFO_INPUT,
  SET_AUTHOR_INFO_INPUT,
  SET_THESIS_INFO_INPUT,
  SET_UPLOAD_INFO_INPUT,
  CONFIRM_THESIS_UPLOAD,
  SHOW_SELECTED_UPLOAD_FORM
} from "./types";

// show previous form
export const showPrevForm = () => dispatch => {
  dispatch({
    type: UPLOAD_THESIS_PREV
  });
};

// show next form
export const showNextForm = () => dispatch => {
  dispatch({
    type: UPLOAD_THESIS_NEXT
  });
};

// show selected form from navbar
export const showSelectedUploadForm = number => dispatch => {
  dispatch({
    type: SHOW_SELECTED_UPLOAD_FORM,
    payload: number
  });
};

// add inputs of institution info form
export const setInstitutionInfoInput = formData => dispatch => {
  dispatch({
    type: SET_INSTITUTION_INFO_INPUT,
    payload: formData
  });
};

// add inputs for author info form
export const setAuthorInfoInput = formData => dispatch => {
  dispatch({
    type: SET_AUTHOR_INFO_INPUT,
    payload: formData
  });
};

// add thesis info form inputs
export const setThesisInfoInput = formData => dispatch => {
  dispatch({
    type: SET_THESIS_INFO_INPUT,
    payload: formData
  });
};

// add upload info form inputs
export const setUploadInfoInput = formData => dispatch => {
  dispatch({
    type: SET_UPLOAD_INFO_INPUT,
    payload: formData
  });
};

// confirm thesis upload
export const confirmThesisUpload = formData => dispatch => {
  dispatch({
    type: CONFIRM_THESIS_UPLOAD
  });
};
