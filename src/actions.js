import { createAction } from 'redux-actions';

import * as actionTypes from './actionTypes';
import * as api from './api';
import { getUserName } from './selectors';


const startLogin = createAction(actionTypes.LOGIN_START);
const endLogin = createAction(actionTypes.LOGIN_END);

export function login({ username, password }) {
  return (dispatch, getState) => {
    dispatch(startLogin());
    return api
    .login({ username, password })
    .then((data) => {
      if(data.ok){
        dispatch(endLogin({ username: data.username }));
      } else {
        dispatch(endLogin(new Error('error')));
      }
    })
    .catch((error) => {
    dispatch(endLogin(new Error('Network error')));
    })
  }
}

export const logout = createAction(actionTypes.LOGOUT);

const startReadProjectList = createAction(actionTypes.READ_PROJECT_LIST_START);
const endReadProjectList = createAction(actionTypes.READ_PROJECT_LIST_END);

export function readProjectList() {
  return (dispatch, getState) => {
    dispatch(startReadProjectList());
    return api
      .readPostList()
      .then((response) => {
        dispatch(endReadProjectList(response.posts));
      })
      .catch((error) => {
        dispatch(endReadProjectList(new Error('Network error')));
      });
  };
}
