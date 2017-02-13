const LISTITEMS = [
                  {name: 'Football', description: '7:30PM Thursday weekly at 367 Hoang Hoa Tham, Tan Binh, TP HCM'},
                  {name: 'ReactJS Traning', description: 'Do excercise 2 before 3:00PM on 13/02/2017'},
                  {name: 'ReactJS Traning', description: 'Participating ReactJS training from 4:30PM on 13/02/2017'}
                ];

var TASK_ID = 0;

export function addTask(text, description) {
	TASK_ID += 1;
	LISTITEMS.push({
		id: TASK_ID,
		name: text,
    description: description
	});
}

export default LISTITEMS;
