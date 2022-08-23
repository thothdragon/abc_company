import {
    FETCH_LIST_EMPLOYEE,
    FETCH_LIST_EMPLOYEE_SUCCESS,
    FETCH_LIST_EMPLOYEE_ERROR,
} from '../types';

const initialState = {
    employees: [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ]
}

export default function employee(state = initialState, action: any) {
    switch (action.type) {
        /**
         * Fetch List Return in the Database
         */
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