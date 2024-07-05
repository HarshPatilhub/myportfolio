import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


const Mycomponents = () => {

    const [data,setData] = useState([])

    const fetchData =  async () => {
        const res = await fetch(`https://api.unsplash.com/photos/?client_id=ajFDSEpmBEKPKar8ZugDdjjxnpIErGr222RVozuPyxA`)
        const result = await res.json()
        setData(result)
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div>
      <h1>Data from api</h1>
            {
                data.map((item,index)=>(
                   <div key={index}>
                        <img src={item.urls.small} alt="" width={500} height={500} />
                   </div>
                ))
            }
    </div>
  )
}

export default Mycomponents
