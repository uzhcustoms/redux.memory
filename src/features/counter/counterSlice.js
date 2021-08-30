import { createSlice } from '@reduxjs/toolkit';

// Array(N).fill(null).map(() => Array(N))

const size = 4;
const initialState = {counter: 1, cells: Array.from(Array(size), () => new Array(size))};

let val = 1;
for(let i = 0; i< initialState.cells.length; i++) {
  
  for (let j = 0; j< initialState.cells[i].length; j++) {
    if (val == size * (size / 2) + 1) {
      val = 1;
    }
    initialState.cells[i][j] = {value: val, visible: false};
    val++;
  }
}
for(let j = 0; j < 20; j++) {
  for(let i = 0; i< initialState.cells.length; i++) {
    initialState.cells[i].sort(() => Math.random() - 0.5);
    initialState.cells.sort(() => Math.random() - 0.5);
  }
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addElem: (state, action) => {
      
      let i = Math.trunc(action.payload / size);
      let j = action.payload - Math.trunc(action.payload / size) * size;

      state.cells[i][j].visible = true;
        if (state.counter % 2 != 0) {
          state.previusValue = {i: i, j: j};
        } else {
          if(state.cells[state.previusValue.i][state.previusValue.j].value != state.cells[i][j].value) {
            state.cells[i][j].visible = false;
            state.cells[state.previusValue.i][state.previusValue.j].visible = false;
          }
        }
        state.counter++;
    },
  },
});

export const { addElem } = counterSlice.actions;
export const selectCells = (state) => state.counter.cells.flat();;
export default counterSlice.reducer;

 
