import {combineReducers} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import books from './bookReducer';

const rootReducer = combineReducers({
	books: books
})

export default rootReducer;
