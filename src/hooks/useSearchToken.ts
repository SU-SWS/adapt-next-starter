import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

export const useSearchToken = () => {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string>(null);

  const fetchToken = useCallback(async () => {
    setLoading(true);
    const result = await axios.get('/api/search/token');
    setLoading(false);
    setToken(result.data.token);
  }, [setLoading, setToken]);

  useEffect(() => {
    fetchToken();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, token };
};
