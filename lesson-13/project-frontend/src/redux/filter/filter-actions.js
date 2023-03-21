import { createAction } from "@reduxjs/toolkit"

export const setFilter = createAction("filter/set");

/*
export const setFilter = payload => {
    return {
        type: SET_FILTER,
        payload,
    }
}
*/