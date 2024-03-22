import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

//combineReducer : 여러개의 reducer를 하나로 합침(각기 다른 상태가 존재할 수 있어서 reducer는 여러개 존재할 수 있다)
const rootReducer = combineReducers({
  counter: counterReducer,
});
export default rootReducer;
