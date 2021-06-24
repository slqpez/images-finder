async function fetchAPI(search ="", page=1) {
  const key = "22111765-972b5e3defe2088214ad7ee4a"
  const url = `https://pixabay.com/api/?key=${key}&q=${search}&page=${page}`;

  const res = await fetch(url)
  const data = await res.json();
  return data;
}

export default fetchAPI;
