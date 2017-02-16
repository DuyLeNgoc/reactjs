export default class TaskService {
  static getTaskList() {
    let request = new Request('http://demo9411062.mockable.io/tasks');
    return fetch(request).then;
  }
}
