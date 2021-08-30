import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  addElem,  selectCells } from './counterSlice';


export function Counter() {
  const cells = useSelector(selectCells);
  // const arrCells = cells.flat();
  // const oneDimArr = cells.reduce((a, b) => [...a, ...b], []);
   console.log(cells);
  
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(addElem(e.target.id));
  }

  return (
    <>
      <div className="memory" >
      {cells.map((item, idx)=> <button style={{width: `${100/4}%`, transition: "all 0.5s"}} className="cell" id={idx} key={idx} onClick={handleClick} disabled={item.visible}>
          {!item.visible ? "" : item.value}
        </button>)} 
      </div>
   
    </>
   );
}