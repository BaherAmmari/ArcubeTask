import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const shortenUrl = async (longUrl: string) => {
  try {
    const response = await axios.post(`${API_URL}/shorten`, { longUrl });
    return response.data.shortUrl;
  } catch (error) {
    throw new Error('Failed to shorten URL'+error);
  }
};
