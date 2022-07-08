import React, { useState } from 'react';

import { useAddColorMutation } from '../services/colorAPI';

const ColorForm = () => {
    const [addColor, { isLoading, data }] = useAddColorMutation();

    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [color, setColor] = useState('');
    const [pantone, setPantone] = useState('');

    const handleClick = async () => {
        const newColor = { name, year, color, pantone };
        addColor(newColor);
        setName('');
        setColor('');
        setYear('');
        setPantone('');
    }

    return (
        <div style={{ margin: '30px' }}>
            <input
                onChange={e => setName(e.target.value)}
                value={name}
                placeholder='name' />
            <input
                onChange={e => setYear(e.target.value)}
                value={year}
                placeholder='year' />
            <input
                onChange={e => setColor(e.target.value)}
                value={color}
                placeholder='hex color' />
            <input
                onChange={e => setPantone(e.target.value)}
                value={pantone}
                placeholder='pantone' />
            <button onClick={handleClick}>Create color</button>
            {isLoading ? <div>Loading...</div> : <div>{JSON.stringify(data)}</div>}
        </div>
    )
}

export default ColorForm
