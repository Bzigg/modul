import React from 'react';
import {fetchPhoto} from '../API/PhotoService';
import notFound from '../assets/not_found.png'

export default function PhotoItem({url}) {
    const hasError = async () => {
        let status;
        try {
            throw Error;
            status = await fetchPhoto(url);
        } catch (e) {
            status = e;
        }

        return status instanceof Error;
    }

    return (
        <div>
            <img src={!hasError() ? url : notFound} alt='картинка' />
        </div>
    );
}
