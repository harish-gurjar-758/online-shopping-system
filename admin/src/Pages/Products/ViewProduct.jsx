import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { GetProductbyIdApi } from '../../apis/api'

export default function ViewProduct() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState(null)

  // Get Product By Id
  const fetchProduct = async () => {
    try {
      setLoading(true)

      // ✅ pass id
      const response = await GetProductbyIdApi(id)

      // ✅ single product, not array
      if (!response?.error && response?.product) {
        setProduct(response.product)
      }
    } catch (error) {
      console.error("Product Fetch Failed By ID:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (id) fetchProduct()
  }, [id])

  if (loading) {
    return <h3>Loading...</h3>
  }

  if (!product) {
    return <h3>Product not found</h3>
  }

  return (
    <div className='w-full mt-[100px] pb-[40px]'>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ₹{product.price}</p>
    </div>
  )
}
