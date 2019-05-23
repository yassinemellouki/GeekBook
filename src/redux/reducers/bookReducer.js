export default function bookReducer(state = ["this is an empty state"], action){
	switch(action.type){
		case "ADD_BOOK":
			return [...state, { ...action.book }];
		default:
			return state;
	}
}
