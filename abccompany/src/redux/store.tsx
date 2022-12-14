import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import employee from './reducers/employee';

const middleware = [thunk];

const reducer = combineReducers({
    employee,
});

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(
            ...middleware
        )
    )
);

export default store;