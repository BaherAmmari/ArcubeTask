import { useState } from 'react';
import { shortenUrl } from '../services/api';
import { useURLContext } from '../context/URLContext';

export const useShortenUrl = () => {
  const [loading, setLoading] = useState(false);
  const { setShortUrl } = useURLContext();

  const shorten = async (longUrl: string) => {
    setLoading(true);
    try {
      const shortUrl = await shortenUrl(longUrl);
      setShortUrl(shortUrl);
    } catch (error) {
      console.error("Error shortening URL:", error);
    } finally {
      setLoading(false);
    }
  };

  return { shorten, loading };
};
