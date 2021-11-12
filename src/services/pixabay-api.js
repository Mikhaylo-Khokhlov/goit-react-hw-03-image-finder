import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const API_KEY = '23504459-8998d3c986a45c76e9c9f5239';

export const getSearchedImage = async (query, page = 1) => {
  try {
    const response = await axios.get(
      `/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    );
    const data = await response.data;
    return data;
  } catch (e) {
    console.log(e);
  } finally {
    //
  }
};
