import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data,setData]=useState(null)

    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null)

  useEffect(()=>{
    

    const fetchData = async () =>{
      try {
        setLoading(true)

        const res= await fetch(url)
        const json= await res.json()

        setData(json)
        setLoading(false)


      } catch (error) {

        console.log(error)
        setError("Houve algum problema ao executar os dados...")
        
      }
    }
      fetchData()
  },[url])
  return {data,loading,error}
}