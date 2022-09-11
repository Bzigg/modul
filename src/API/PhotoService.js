export const fetchAllPhoto = () => {
    return fetch('https://boiling-refuge-66454.herokuapp.com/images', {
        method: 'GET'
    });
}

export const fetchPhoto = (url) => {
    return fetch(url, {
        method: 'GET'
    });
}
