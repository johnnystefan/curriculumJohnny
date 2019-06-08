import { useState, useEffect } from 'react';
const api = 'https://us-central1-gndx-cv.cloudfunctions.net/me';

const useGetData = () => {
  const [myData, setData] = useState([]);

  useEffect(() => {
    fetch(api)
    .then(Response => Response.json())
    .then(data => setData(data));
  }, []);

  return myData;
}

export default useGetData;
