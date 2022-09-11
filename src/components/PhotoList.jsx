import React from 'react';
import PhotoItem from './PhotoItem';
import Loading from './UI/Loading';

export default function PhotoList({photo}) {
    return (
        <div className='list'>
            <img src="../assets/not_found.png" alt="" />
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
                    : <Loading />
            }
        </div>
    );
}
