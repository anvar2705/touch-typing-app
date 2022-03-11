import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

const UISlice = createSlice({
  name: 'UI',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
  },
})

export default UISlice.reducer
export const { increment, decrement } = UISlice.actions
