import React from 'react';

function ColorPicker({ color, onColorChange }){

    return(
        <div className="color-picker-container">
            <h1>Color Picker</h1> {/* 修正拼写 */}
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Select a Color: {color}</p>
            </div>
            <label>Select a Color</label>
            <input type="color" value={color} onChange={onColorChange} />
        </div>
    );
}

export default ColorPicker