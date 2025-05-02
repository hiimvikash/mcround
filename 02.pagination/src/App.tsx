
import { useEffect, useMemo, useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard';

const limit = 10;

const BASE_URL = `https://dummyjson.com/products?limit=${limit}`

interface Product {
  id: number,
  title: string,
  thumbnail: string
}


function App() {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [totalPage, setTotalPage] = useState(0);



  let skip: number = useMemo(() => ((page - 1) * 10), [page]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(`${BASE_URL}&skip=${skip}`)
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await res.json();
        setTotalPage(Math.ceil(data.total / limit));
        console.log(totalPage);
        setProducts(data.products);

      } catch (error: any) {
        console.log(error.message);
      }
    }
    fetchProducts();
  }, [skip])

  function handleNext() {
    setPage(page + 1);
  }
  function handlePrev() {
    setPage(page - 1);
  }



  return (
    <div className='main'>
      <div className="header">
        <h1>Pagination</h1>
      </div>
      <div className="container">

        <div className="pagi" style={{marginBottom : "18px"}}>
          <button onClick={handlePrev} disabled={page === 1}>Prev</button>
          <p>Page <b>{page}</b> of <b>{totalPage}</b></p>
          <button onClick={handleNext} disabled={page === totalPage}>Next</button>
        </div>

        <div className="pagi">
          {[...Array(totalPage)].map((_, index) => (
            <button key={index} onClick={() => setPage(index + 1)} style={page===index+1 ? {backgroundColor : "gray", color : "white"} : {backgroundColor : "#edece8"}}>
              {index + 1}
            </button>
          ))}
        </div>

        <div className="items">
          {
            products.map((product) => (
              <ProductCard key={product.id} title={product.title} image={product.thumbnail} />
            ))
          }
        </div>
      </div>
    </div>
  )


}

export default App
