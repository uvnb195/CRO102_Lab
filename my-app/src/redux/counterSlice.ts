import { createSlice } from "@reduxjs/toolkit";

export interface CounterState { value: number }

const initialState: CounterState = { value: 0 }

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        updateValue: (state, action) => {
            state.value += action.payload
        },
        resetValue: (state) => ({
            ...state,
            value: initialState.value
        })
    }
})

export const { updateValue, resetValue } = counterSlice.actions
export default counterSlice.reducer