import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import PhotoList from './components/PhotoList';
import Modal from './components/UI/Modal';
import { closeModalAction } from './store/modalReducer';
import {fetchAllPhotoAction} from './store/photoReducer';

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllPhotoAction());
    }, []);

    const photo = useSelector((state) => {
        return state.photo.allPhoto;
    });

    const modalVisible = useSelector((state) => {
        return state.modal.modalVisible;
    });

    const closeModal = () => {
        dispatch(closeModalAction());
    };

    return (
        <div className='app'>
            <Modal
                visible={modalVisible}
                setVisible={closeModal}
            >
                <div className="">123</div>
            </Modal>
            <PhotoList
                photo={photo}
            />
        </div>
    );
}
