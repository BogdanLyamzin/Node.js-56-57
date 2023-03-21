import { createReducer } from "@reduxjs/toolkit";

import { setFilter } from "./filter-actions";

const filterReducer = createReducer("", builder => {
    builder.addCase(setFilter, (_, {payload}) => payload)
})

/*
const filterReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case SET_FILTER:
            return payload;
        default:
            return state;
    }
}
*/
export default filterReducer;