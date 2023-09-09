import { useState,useEffect } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

function SingleProduct() {
    const [single, setSingle] = useState([])
    const params = useParams()
    const back = useNavigate()

    const singleProductHandler = async() =>{
        try {
            const res = await axios.get(`https://api.pujakaitem.com/api/products/${params.id}`)
            setSingle(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
      singleProductHandler()
    }, [])
    

  return (
    <div className="container py-5">
      <button className="btn btn-outline-primary" onClick={()=>back("/ProductApi")}>Back</button>

        <div className="row py-5">
          <div className="col-lg-6">
            {single.image && <img src={single.image[0].url} alt={single.name} width="100%" />}
          </div>
          <div className="col-lg-6">
            <p>{single.name}</p>
            <p>{single.price}</p>
            <p>{single.description}</p>
            <button className="btn btn-success"> Add To Cart</button>
          </div>
        </div>
    </div>
  )
}

export default SingleProduct