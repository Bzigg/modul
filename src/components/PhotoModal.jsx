import React, { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { closeModalAction } from "../store/modalReducer"
import {
    cleanPostAction,
    fetchPostAction,
    sendCommentAction,
} from "../store/postReducer"
import PhotoItem from "./PhotoItem"
import Input from "./UI/Input/Input"
import Modal from "./UI/Modal/Modal"
import "./PhotoModal.css"

export default function PhotoModal({ photoId, resetId }) {
    const dispatch = useDispatch()

    const [comment, setComment] = useState("")
    const [name, setName] = useState("")

    const modalVisible = useSelector((state) => {
        return state.modal.modalVisible
    })

    const postData = useSelector((state) => {
        return { ...state.post.postData }
    })

    useEffect(() => {
        if (modalVisible) {
            dispatch(fetchPostAction({ photoId }))
        }
    }, [modalVisible])

    const sendComment = (e) => {
        e.preventDefault()
        dispatch(
            sendCommentAction({
                id: photoId,
                name,
                comment,
            })
        )
        cleanForm()
    }

    const closeModal = () => {
        dispatch(closeModalAction())
        dispatch(cleanPostAction())
        resetId()
        cleanForm()
    }

    const cleanForm = () => {
        setName("")
        setComment("")
    }

    return (
        <Modal visible={modalVisible} setVisible={closeModal}>
            <div className="postPhoto">
                {postData && (
                    <>
                        <div className="postPhoto__photo">
                            <PhotoItem url={postData.url} />
                        </div>
                        <div className="postPhoto__comments">
                            {postData.comments.map((commentData) => {
                                return (
                                    <div
                                        className="postPhoto__comment"
                                        key={commentData.id}
                                    >
                                        <div className="postPhoto__text">
                                            {commentData.text}
                                        </div>
                                        <div className="postPhoto__date">
                                            {new Date(
                                                commentData.date
                                            ).toDateString()}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </>
                )}
                <div className="postPhoto__field">
                    <form action="#" className="display__flex fd__column">
                        <Input
                            placeholder="??????"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <textarea
                            name="postPhoto_Comment"
                            id="postPhoto_Comment"
                            placeholder="??????????????????????"
                            cols="30"
                            rows="10"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                        <button onClick={sendComment}>??????????????????</button>
                    </form>
                </div>
            </div>
        </Modal>
    )
}
