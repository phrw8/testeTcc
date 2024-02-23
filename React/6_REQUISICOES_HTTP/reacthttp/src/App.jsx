import { useState, useEffect } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch'

function App() {
const url="http://localhost:3000/products"

const [products,setProducts]=useState([])

// custom hook

const {data:items, loading}=useFetch(url)

const {error}=useFetch()


// useEffect(()=>{

//   async function getData(){

//     const res=await fetch(url)

//     const data= await res.json()

//     setProducts(data)


//   }
//   getData()


// },[])

const [name,setName]=useState("")
const [price,setPrice]=useState("")

useEffect(() => {
  if (items) {
    setProducts(items);
    console.log("exceutando")
  }
}, [items]);

const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price
    }

    const res= await fetch(url,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(product),
    })

    const addedProduct=await res.json()

    setProducts((prevProducts)=>[...prevProducts,addedProduct])
    setName('');
    setPrice('');
}


  return (
    <>
      <h2>Https em react</h2>

      {error && <p>{error}</p>}
      {loading && <p>Carregando..</p>}
      <ul>
        { products.map((product)=>(
          <li key={product.id}>{product.name} R$ {product.price}</li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label >
            <span>Name</span>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
          </label>
          <label >
            <span>Price</span>
            <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)}/>
          </label>
          <input type="submit" value="Enviar"/>

        </form>
      </div>
     
    </>
  )
}

export default App
