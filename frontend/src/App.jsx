import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'

function App() {

  // const [products,error, loading ] = customReactQuery('/api/products')
  const [products , setProducts ] = useState([]);
  const [error, setError ] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  

  useEffect(() => {
    const controller = new AbortController() // cancels out the old requests 

    //avoiding race conditions sequence

    // for canceling out the older request we use the concept of debouncing

    //iffy -> immediately invoed functions, sometimes what happens is that we want to mount or stop the whole application until the data is fetched from the api so, we can use iffy in that case 
    ;(async()=> {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get('/api/products?search=' + search,{
          signal:controller.signal //send out the  request with this signal to cancel it if needed
        })
        console.log(response.data);
        setProducts(response.data)
        setLoading(false);
      } catch (error) {
        if(axios.isCancel(error)){
          console.log('Request canceled', error.message)
          return;
        }
        setError(true);
        setLoading(false);
      }
    })()
    //cleanup method
    return () => {
      controller.abort() // unmounting all the old request and effects 
    }
  }, [search])

  // if(error){
  //   return <h1>Something went wrong</h1>
  // }
  // if(loading){
  //   return <h1>Loading...</h1>
  // }

  return(
    <>
      <h1>Chai aur Api in react </h1>
      <input 
        type= "text"
        placeholder='Search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}

      />

      {loading && (<h1>Loading ...</h1>)}
      {error && (<h1>Something went wrong</h1>)}

      <h2>Number of Products are: {products.length}</h2>
    </>
  )
}

export default App


const customReactQuery = (urlPath) => {
 
  return [products, error, loading];  
}