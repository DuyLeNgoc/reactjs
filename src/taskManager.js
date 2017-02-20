const LISTITEMS = [
    {"taskID": 1, "created":"2017-12-17T03:24:00", "effort":10, "complete": true, "name": "Football", "description": "7:30PM Thursday weekly at 367 Hoang Hoa Tham, Tan Binh, TP HCM"},
    {"taskID": 2, "created":"2017-12-17T03:24:00", "effort":20, "complete": true, "name": "ReactJS Traning", "description": "Do excercise 2 before 3:00PM on 13/02/2017"},
    {"taskID": 3, "created":"2017-12-17T03:24:00", "effort":20, "complete": false, "name": "ReactJS Traning", "description": "Participating ReactJS training from 4:30PM on 13/02/2017"}
    ];
var taskID = 0;

export function addTask(text, description, effort) {
	taskID += 1;
  let createdDate = new Date();
	LISTITEMS.push({
		taskID: taskID,
		name: text,
    description: description,
    created: createdDate.toString(),
    effort: effort
	});
}

export default LISTITEMS;
