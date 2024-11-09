import {useEffect, useState} from 'react'

const useFetch = (apiFn, initialState) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [apiData, setApiData] = useState(initialState);


  useEffect(() => {
		const getData = async () => {
			setIsLoading(true);
			try {
				const places = await apiFn();
				setApiData(places);
			} catch (error) {
				setError({
					message: error?.message || 'Failed to get data.',
				});
			}
			setIsLoading(false);
		};
		getData();
	}, [apiFn]);

  return { isLoading, error, apiData, setApiData };

}

export {useFetch}
