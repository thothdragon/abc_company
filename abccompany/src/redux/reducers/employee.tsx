import {
    FETCH_LIST_EMPLOYEE,
    FETCH_LIST_EMPLOYEE_SUCCESS,
    FETCH_LIST_EMPLOYEE_ERROR,
} from '../types';

const initialState = {
    employees: '',
    loading: false,
    error: ''
}

export default function employee(state = initialState, action: any) {
    switch (action.type) {
        case FETCH_LIST_EMPLOYEE:
            return {
                ...state,
                loading: true,
            };
        case FETCH_LIST_EMPLOYEE_SUCCESS:
            return {
                ...state,
                employees: action.employees,
                loading: false,
            };
        case FETCH_LIST_EMPLOYEE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.loading,
            };
        default:
            return state
    };
}