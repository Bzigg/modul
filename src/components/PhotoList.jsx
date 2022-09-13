import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { openModalAction } from "../store/modalReducer"
import PhotoItem from "./PhotoItem"
import PhotoModal from "./PhotoModal"
import Loading from "./UI/Loading/Loading"

export default function PhotoList({ photo }) {
    const dispatch = useDispatch()
    const [selectPhotoId, setSelectPhotoId] = useState(null)

    const openModal = (photoId) => {
        setSelectPhotoId(photoId)
        dispatch(openModalAction())
    }

    const resetId = () => {
        setSelectPhotoId(null)
    }

    return (
        <div className="list">
            <img src="../assets/not_found.png" alt="" />
            {photo && photo.length ? (
                photo.map((photoItem) => {
                    return (
                        <PhotoItem
                            key={photoItem.id}
                            url={photoItem.url}
                            photoId={photoItem.id}
                            openModal={openModal}
                        />
                    )
                })
            ) : (
                <Loading />
            )}
            <PhotoModal resetId={resetId} photoId={selectPhotoId} />
        </div>
    )
}
