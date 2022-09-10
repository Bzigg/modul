export const fetchAllPhoto = () => {
    return fetch('https://boiling-refuge-66454.herokuapp.com/images', {
        method: 'GET'
    });
}