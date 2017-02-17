export default class TaskService {
  //Return an promise
  static getTaskList() {
    let request = new Request('http://demo9411062.mockable.io/tasks');
    return fetch(request)
      .then(response => {
        if(response.ok) {
          return response; 
        }
        let errorMessage = 'Network response was not ok.'
        if(response.json().hasOwnProperty('message')) {
          errorMessage = response['message'];
        }
        throw new Error(errorMessage);
      })
      .catch(error => {
        console.log('[NetWork Service]: There has been a problem with your fetch operation: ' + error.message);
        return error;
    });
  }

  static createNewTask(item) {
    return new Promise.resolve(item);
  }

  static updateTask(item) {
    return new Promise.resolve(item);
  }
}
