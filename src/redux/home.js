import TaskService from 'network/taskService';
import LISTITEMS from "taskManager";

// ===============Guide===================
// * Step to integrate Redux library to your application
// 1. Define Action Types in application
const REQUEST = 'Request';
const SUCCESS = 'Success';
const FAILED  = 'Failed';
// 2. Create action creators: functions to return actions.
//   2.1: We can use thunk to return function instead of actions
//       It delay evaluation of expression until we call it explicit.
 export function taskListRequest() {
   return {
     type: REQUEST
   };
 }

 export function taskListRequestSuccess(json) {
   return {
     type: SUCCESS,
     payload: json
   };
 }

 export function taskListRequestFailed(error) {
   return {
     type: FAILED,
     error: error.message
   };
 }

const initialState = {error: '', loading: false, dataSource: []};
// 3. Create Reducers: Handle application's state changes in response.
//   3.1: Reducer Composition: We can split a function to separate functions to process logic
//   3.2: combineReducers() group logic of functions to one instance then export to another source import to use

export function taskListReducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        dataSource: action.payload
      };
    case FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      };
  }
  return state;
}
// 4. Create Store: You'll only have a single store in a a Redux application.
//   When you want to split your data handling logic. You'll use reducer Composition instead of many stores
//   4.1: let store = createStore(reducer, initial state)
// let request = new Request('http://demo9411062.mockable.io/tasks');
//     return fetch(request);

export function getTaskList() {
  return dispatch => {
    dispatch(taskListRequest());
    return dispatch(taskListRequestSuccess(LISTITEMS));
    // Calling with WebService
    // return TaskService.getTaskList()
    // .then(response => {
    //   return response.json();
    // })
    // .then(jsonTask => {
    //     dispatch(taskListRequestSuccess(jsonTask));
    // })
    // .catch(error => {
    //   console.log('There has been a problem with your fetch operation: ' + error.message);
    //   dispatch(taskListRequestFailed(error))
    // });
  };
}
