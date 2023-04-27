import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url) => axios.get(url).then((res) => res.data);

function useComments(id) {
  // prettier-ignore
  const {
    data,
    error,
    mutate,
    isLoading,
    isValidating,
  } = useSWR(`/api/events/${id}/comments`, fetcher);

  return {
    error,
    mutate,
    isLoading,
    isValidating,
    comments: data,
  };
}

export default useComments;
