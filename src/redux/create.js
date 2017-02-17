// ===============Guide===================
// * Step to integrate Redux library to your application
// 1. Define Action Types in application
//[Action Types]: Create
const TASK_CREATE_REQUEST = 'CreatRequest';
const TASK_CREATE_FAILED  = 'CreateFailed';
const TASK_CREATE_SUCCESS = 'CreateSuccess'

//[Action Types]: Update
const TASK_UPDATE_REQUEST = 'UpdateRequest';;
const TASK_UPDATE_SUCCESS = 'UpdateSuccess';
const TASK_UPDATE_FAILED  = 'UpdateFailed';

// 2. Create action creators: functions to return actions.
//   2.1: We can use thunk to return function instead of actions
//       It delay evaluation of expression until we call it explicit.
//[Action Creators]: Create task
 export function taskCreateRequest() {
   return {
     type: TASK_CREATE_REQUEST
   };
 }

 export function taskCreateSuccess(json) {
   return {
     type: TASK_CREATE_SUCCESS,
     payload: json
   };
 }

 export function taskCreateFailed(error) {
   return {
     type: TASK_CREATE_FAILED,
     error: error.message
   };
 }

//[Action Creators]: Update task
export function taskUpdateRequest() {
   return {
     type: TASK_UPDATE_REQUEST
   };
 }

 export function taskUpdateSuccess(json) {
   return {
     type: TASK_UPDATE_SUCCESS,
     payload: json
   };
 }

 export function taskUpdateFailed(error) {
   return {
     type: TASK_UPDATE_FAILED,
     error: error.message
   };
 }

const initialState = {error: '', loading: false, dataSource: []};
// 3. Create Reducers: Handle application's state changes in response.
//   3.1: Reducer Composition: We can split a function to separate functions to process logic
//   3.2: combineReducers() group logic of functions to one instance then export to another source import to use
//[Reducer]: Create
export function taskCreateReducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case TASK_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case TASK_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        dataSource: action.payload.task
      };
    case TASK_CREATE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      };
  }
  return state;
}
//[Reducer]: Update
export function taskUpdateReducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case TASK_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case TASK_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        dataSource: action.payload.task
      };
    case TASK_UPDATE_FAILED:
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

export function createNewTask(item) {
  return dispatch => {
    dispatch(taskCreateRequest());
    return TaskService.createNewTask(item)
    .then(response => {
      return response.json();
    })
    .then(jsonTask => {
        dispatch(taskCreateSuccess(jsonTask));
    })
    .catch(error => {
      console.log('There has been a problem with your fetch operation: ' + error.message);
      dispatch(taskCreateFailed(error))
    });
  };
}

export function updateTask(item) {
  return dispatch => {
    dispatch(taskCreateRequest());
    return TaskService.updateTask(item)
    .then(response => {
      return response.json();
    })
    .then(jsonTask => {
        dispatch(taskCreateSuccess(jsonTask));
    })
    .catch(error => {
      console.log('There has been a problem with your fetch operation: ' + error.message);
      dispatch(taskCreateFailed(error))
    });
  };
}
