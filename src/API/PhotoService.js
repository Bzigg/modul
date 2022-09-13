// Запрос всех фотографий
export const fetchAllPhoto = () => {
    return fetch("https://boiling-refuge-66454.herokuapp.com/images", {
        method: "GET",
    })
}

// Для проверки прав на фотографию
export const fetchPhoto = (url) => {
    return fetch(url, {
        method: "GET",
    })
}

// Запрос конкретной фотографиии комментариев к ней
export const fetchPost = (id) => {
    return fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`, {
        method: "GET",
    })
}

// Отправка комментария пользователя
export const sendComment = (data) => {
    const dataJSON = JSON.stringify(data)
    return fetch(
        `https://boiling-refuge-66454.herokuapp.com/images/${data.id}/comments`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: dataJSON,
        }
    )
}
