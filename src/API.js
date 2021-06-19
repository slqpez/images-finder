async function fetchAPI(search) {
  const url = `https://pixabay.com/api/?key=22111765-972b5e3defe2088214ad7ee4a&q=${search}`;

  const res = await fetch(url, {
     'mode': 'cors', 
    /* 'headers': {
        'Access-Control-Allow-Origin': '*',
    } 
    */
  });
  const data = await res.json();
  return data.hits ;
}

export default fetchAPI;
