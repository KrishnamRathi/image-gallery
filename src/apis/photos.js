import axios from 'axios';

const getPhotos = async (page, perPage) => {
    const response = await axios.get(
        `https://api.unsplash.com/photos?page=${page}&per_page=${perPage}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
    );
    return response.data;
};

const searchPhotos = async (page, keyword) => {
    const response = await axios.get(
        `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
    );
    return response.data;
};

export { getPhotos, searchPhotos };