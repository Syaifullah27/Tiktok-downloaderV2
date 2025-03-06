import axios from 'axios';

export const fetchTikTokData = async (url) => {
    try {
      const options = {
        method: 'GET',
        url: 'https://tiktok-video-no-watermark2.p.rapidapi.com/',
        params: { url, hd: '1' },
        headers: {
          'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          'x-rapidapi-host': 'tiktok-video-no-watermark2.p.rapidapi.com'
        }
      };
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error('Error fetching TikTok data:', error);
      throw new Error('Failed to fetch TikTok data');
    }
  };