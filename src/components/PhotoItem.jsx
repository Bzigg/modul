import React from 'react';

export default function PhotoItem({url, key}) {
    return (
        <div>
            <img src={url} alt={key} />
        </div>
    );
}
