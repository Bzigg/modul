import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import PhotoList from './components/PhotoList';
import {fetchAllPhotoAction} from './store/photoReducer';

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllPhotoAction());
    }, []);

    const photo = useSelector((state) => {
        return state.allPhoto;
    });

    return (
        <div className='app'>
            <PhotoList
                photo={photo}
            />
        </div>
    );
}
