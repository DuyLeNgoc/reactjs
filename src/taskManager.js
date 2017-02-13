const LISTITEMS = [
                  {taskID: 1, name: 'Football', description: '7:30PM Thursday weekly at 367 Hoang Hoa Tham, Tan Binh, TP HCM'},
                  {taskID: 2, name: 'ReactJS Traning', description: 'Do excercise 2 before 3:00PM on 13/02/2017'},
                  {taskID: 3, name: 'ReactJS Traning', description: 'Participating ReactJS training from 4:30PM on 13/02/2017'}
                ];

var taskID = 0;

export function addTask(text, description) {
	taskID += 1;
	LISTITEMS.push({
		id: taskID,
		name: text,
    description: description
	});
}

export default LISTITEMS;
