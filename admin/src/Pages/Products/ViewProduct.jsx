import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetProductbyIdApi } from '../../apis/api'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"

export default function ViewProduct() {
  const { id } = useParams()

  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState(null)
  const [activeImage, setActiveImage] = useState(null)

  // Fetch product by ID
  const fetchProduct = async () => {
    try {
      setLoading(true)
      const response = await GetProductbyIdApi(id)

      if (!response?.error && response?.product) {
        setProduct(response.product)

        // Set default banner
        if (response.product.banner?.length > 0) {
          setActiveImage(response.product.banner[0])
        }
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

  if (loading) return <h3 className="text-center mt-20">Loading...</h3>
  if (!product) return <h3 className="text-center mt-20">Product not found</h3>

  // ⭐ Rating renderer
  const renderStars = (rating = 0) => {
    return Array.from({ length: 5 }, (_, i) => {
      if (rating >= i + 1) return <FaStar key={i} className="text-yellow-400" />
      if (rating >= i + 0.5) return <FaStarHalfAlt key={i} className="text-yellow-400" />
      return <FaRegStar key={i} className="text-gray-400" />
    })
  }

  return (
    <div className="w-full mt-[100px] pb-[40px] flex gap-10 justify-center">

      {/* IMAGE SECTION */}
      <div>
        {/* Big Image with Hover Zoom */}
        <div className="w-[350px] h-[350px] overflow-hidden border rounded mb-4">
          {activeImage && (
            <img
              src={activeImage}
              alt="Product"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-125 cursor-zoom-in"
            />
          )}
        </div>

        {/* Thumbnails (CLICK ONLY) */}
        <div className="flex gap-2">
          {product.banner?.length > 0 ? (
            product.banner.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Thumbnail"
                onClick={() => setActiveImage(img)}
                className={`w-[90px] h-[90px] object-cover border rounded cursor-pointer
                  ${activeImage === img ? 'border-orange-500' : 'border-gray-300'}`}
              />
            ))
          ) : (
            <p className="text-gray-400">No images available</p>
          )}
        </div>
      </div>

      {/* PRODUCT INFO */}
      <div className="max-w-md">
        <h2 className="text-2xl font-bold">{product.title}</h2>

        {/* Ratings */}
        <div className="flex items-center gap-2 mt-2">
          <div className="flex">{renderStars(product.ratings)}</div>
          <span className="text-sm text-gray-500">
            ({product.ratings || 0})
          </span>
        </div>

        <p className="mt-4 text-gray-700">{product.shortDescription}</p>
        <div className='flex items-center gap-5'>
          <p className="line-through text-gray-500 mt-3">
            Old Price: ₹{product.oldPrice}
          </p>

          <p className="text-green-600 font-semibold text-xl">
            New Price: ₹{product.newPrice}
          </p>
        </div>
        <div className="mt-4">
          <p className="font-semibold mb-2">Available Sizes:</p>

          <div className="flex gap-2">
            {product.productSizes?.length > 0 ? (
              product.productSizes.map((size, index) => (
                <span
                  key={index}
                  className="px-3 py-1 border rounded cursor-pointer hover:border-orange-500"
                >
                  {size}
                </span>
              ))
            ) : (
              <span className="text-gray-400">No sizes available</span>
            )}
          </div>
        </div>
        <p>Stock : {product.availableStock}</p>
        <p>Active : {product.isActive ? 'Yes' : 'No'}</p>
      </div>
    </div>
  )
}
