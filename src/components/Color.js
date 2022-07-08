import React from 'react';

const Color = ({ item }) => {
    return (
        <div key={item.id} style={{ "color": item.color }}>
            {item.name}
        </div>
    )
}

export default Color
