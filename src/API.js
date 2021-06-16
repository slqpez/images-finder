

async function fetchAPI(){
 const url = ``

 const res = await fetch(url, 
)
 const data = await res.json()
 console.log(data)
}

export default fetchAPI

