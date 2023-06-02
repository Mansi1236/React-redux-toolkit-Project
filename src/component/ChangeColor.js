import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { theme } from './features/Theme';

export const ChangeColor = () => {
    const [color, setColor] = useState('')
    const dispatch = useDispatch();
  return (
    <div>
        <input type='text' placeholder='enter color' onChange={(event) => { setColor(event.target.value)} }/>
<button onClick={() => {dispatch(theme(color))}}>Change Colour</button>

    </div>
  );
}


export default ChangeColor;