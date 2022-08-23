import * as types from "../types";
import * as connectData from '../../ressources/connectData';

export const listEmployee = () => ({
    type: types.FETCH_LIST_EMPLOYEE,
    loading: Boolean,
});

export const listEmployeeSuccess = (employees: any) => ({
    type: types.FETCH_LIST_EMPLOYEE_SUCCESS,
    employees: employees.results,
    loading: Boolean,
});

export const listEmployeeError = (error: any) => ({
    type: types.FETCH_LIST_EMPLOYEE_ERROR,
    loading: Boolean,
    error: error,
});

export const fetchListEmployee = () => {
    return function (dispatch: any) {
        dispatch(listEmployee());
        return fetch(
            connectData.URL_SERVICE,
            connectData.REQUEST_OPTION
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error - 404 Not Found')
                };
                return response.json();
            })
            .then((listEmployee) => {
                dispatch(listEmployeeSuccess(listEmployee))
            })
            .catch((error) => {
                dispatch(listEmployeeError(error));
            })
    }
}
