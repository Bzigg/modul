import React from 'react';
import PhotoItem from './PhotoItem';

export default function PhotoList({photo}) {
    return (
        <div className='list'>
            {
                photo && photo.length
                    ? photo.map((photoItem) => {
                        return (
                        <PhotoItem
                            key={photoItem.id}
                            url={photoItem.url}
                        />
                        );
                    })
                    :
                    <div className="">empty</div>
            }
        </div>
    );
}
