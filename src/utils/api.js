import axios from 'axios';

export const fetchTikTokData = async (url) => {
  const options = {
    method: 'GET',
    url: 'https://tiktok-video-no-watermark2.p.rapidapi.com/',
    params: {
      url,
      hd: '1'
    },
    headers: {
      'x-rapidapi-key': 'e3c9aaf249msh9d7514dbcb20064p15b928jsn5590edf36d1e',
      'x-rapidapi-host': 'tiktok-video-no-watermark2.p.rapidapi.com'
    }
  };

  const response = await axios.request(options);
  return response.data;
};