
import { useEffect, useState } from 'react'
import './App.css'

const limit = 10;

const BASE_URL = `https://dummyjson.com/products?limit=${limit}`

interface Product {
  title : string,
  image : string
}


function App() {
  const [page, setPage]=useState(1);
  const [data, setData] = useState<Product[]>([]);

  let skip:number;
  useEffect(()=>{
     skip = (page-1) * 10;
  }, [page])

  useEffect(()=>{
    fetchProducts();
  },[])


  async function fetchProducts(){
    const res = await fetch(`${BASE_URL}&skip=${skip}`)
    const daa  = await res.json();
    setData(daa.products);
  }

  return (
    <div className='main'>
      <div className="header">
        <h1>Pagination</h1>
      </div>
      <div className="items">
          {
            data.map((d)=>(
              <li>{d.title}</li>
            ))
          }
      </div>
    </div>
  )


}

export default App
