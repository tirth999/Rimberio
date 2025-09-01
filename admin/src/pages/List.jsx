import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'

const List = ({ token }) => {
  const [list, setList] = useState([])
  const [editingProduct, setEditingProduct] = useState(null)

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list')
      if (response.data.success) {
        setList(response.data.products.reverse())
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + '/api/product/remove',
        { id },
        { headers: { token } }
      )

      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList()
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const handleEditClick = async (productId) => {
    try {
      const response = await axios.post(backendUrl + '/api/product/single', { productId })
      if (response.data.success) {
        setEditingProduct(response.data.product)
      } else {
        toast.error("Product not found")
      }
    } catch (error) {
      console.log(error)
      toast.error("Failed to fetch product details")
    }
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    
    // Append basic fields
    formData.append('productId', editingProduct._id)
    formData.append('name', editingProduct.name)
    formData.append('description', editingProduct.description)
    formData.append('price', editingProduct.price)
    formData.append('category', editingProduct.category)
    formData.append('subCategory', editingProduct.subCategory)
    formData.append('bestseller', editingProduct.bestseller)

    // Append images
    for (let i = 1; i <= 4; i++) {
      const imageInput = document.getElementById(`editImage${i}`)
      if (imageInput?.files[0]) {
        formData.append(`image${i}`, imageInput.files[0])
      }
    }

    try {
      const response = await axios.post(
        backendUrl + '/api/product/edit',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            token
          }
        }
      )

      if (response.data.success) {
        toast.success("Product updated successfully!")
        setEditingProduct(null)
        await fetchList()
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error("Failed to update product")
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <>
      <p className='mb-2'>All Products List</p>
      <div className='flex flex-col gap-2'>

        {/* Table Header */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Subcategory</b>
          <b>Price</b>
          <b>Bestseller</b>
          <b className='text-center'>Action</b>
        </div>

        {/* Product List */}
        {list.map((item, index) => (
          <div 
            className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' 
            key={index}
          >
            <img className='w-12' src={item.image[0]} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p className='hidden md:block'>{item.subCategory}</p>
            <p>{currency}{item.price}</p>
            <p>{item.bestseller ? 'Yes' : 'No'}</p>
            <div className='text-right md:text-center flex gap-2 justify-end md:justify-center'>
              <button
                onClick={() => handleEditClick(item._id)}
                className='text-blue-600 hover:text-blue-800 text-sm'
              >
                Edit
              </button>
              <span 
                onClick={() => removeProduct(item._id)}
                className='cursor-pointer hover:text-red-600 text-lg'
              >
                ×
              </span>
            </div>
          </div>
        ))}

        {/* Edit Modal */}
        {editingProduct && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <h2 className="text-xl font-bold mb-4">Edit Product</h2>
              <form onSubmit={handleEditSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label>Product Name</label>
                  <input
                    type="text"
                    value={editingProduct.name}
                    onChange={(e) => setEditingProduct({...editingProduct, name: e.target.value})}
                    className="border p-2 rounded"
                    required
                  />
                </div>

                {/* Price */}
                <div className="flex flex-col gap-1">
                  <label>Price ({currency})</label>
                  <input
                    type="number"
                    value={editingProduct.price}
                    onChange={(e) => setEditingProduct({...editingProduct, price: e.target.value})}
                    className="border p-2 rounded"
                    required
                  />
                </div>

                {/* Category */}
                <div className="flex flex-col gap-1">
                  <label>Category</label>
                  <input
                    type="text"
                    value={editingProduct.category}
                    onChange={(e) => setEditingProduct({...editingProduct, category: e.target.value})}
                    className="border p-2 rounded"
                    required
                  />
                </div>

                {/* Subcategory */}
                <div className="flex flex-col gap-1">
                  <label>Subcategory</label>
                  <input
                    type="text"
                    value={editingProduct.subCategory}
                    onChange={(e) => setEditingProduct({...editingProduct, subCategory: e.target.value})}
                    className="border p-2 rounded"
                    required
                  />
                </div>

                {/* Bestseller */}
                <div className="flex flex-col gap-1">
                  <label>Bestseller</label>
                  <select
                    value={editingProduct.bestseller}
                    onChange={(e) => setEditingProduct({...editingProduct, bestseller: e.target.value === 'true'})}
                    className="border p-2 rounded"
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>

                {/* Description */}
                <div className="md:col-span-2 flex flex-col gap-1">
                  <label>Description</label>
                  <textarea
                    value={editingProduct.description}
                    onChange={(e) => setEditingProduct({...editingProduct, description: e.target.value})}
                    className="border p-2 rounded h-32"
                    required
                  />
                </div>

                {/* Images */}
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="flex flex-col gap-1">
                    <label>Image {num}</label>
                    <img 
                      src={editingProduct.image[num-1] || '/placeholder.jpg'} 
                      className="w-20 h-20 object-cover mb-2"
                      alt={`Preview ${num}`}
                    />
                    <input
                      type="file"
                      id={`editImage${num}`}
                      onChange={(e) => {
                        const newImages = [...editingProduct.image]
                        if (e.target.files[0]) {
                          newImages[num-1] = URL.createObjectURL(e.target.files[0])
                        }
                        setEditingProduct({...editingProduct, image: newImages})
                      }}
                      className="border p-2 rounded"
                      accept="image/*"
                    />
                  </div>
                ))}

                {/* Buttons */}
                <div className="md:col-span-2 flex gap-4 justify-end mt-4">
                  <button
                    type="button"
                    onClick={() => setEditingProduct(null)}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </>
  )
}

export default List