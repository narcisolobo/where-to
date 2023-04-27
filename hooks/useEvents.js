import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url) => axios.get(url).then((res) => res.data);

function useEvents(param = false, initialEvents) {
  // prettier-ignore
  const {
    data,
    error,
    isLoading
  } = useSWR(`/api/events/${param ? param : ''}`, fetcher, {
    fallbackData: initialEvents,
  });

  return {
    error,
    isLoading,
    events: data,
  };
}

export default useEvents;
