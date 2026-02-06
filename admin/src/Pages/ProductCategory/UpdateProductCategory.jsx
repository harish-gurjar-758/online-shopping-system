import Button from '@mui/material/Button'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AddNewProductCategoryApi, GetProductCategorybyIdApi } from '../../apis/api'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { styled } from '@mui/material/styles'

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function UpdateProductCategory() {
    const [productCategory, setProductCategory] = useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)

    // LOGO STATES (UNCHANGED NAME)
    const [logo, setLogo] = useState(null)
    const [previewLogo, setPreviewLogo] = useState(null)

    const navigate = useNavigate();

    // GET PRODUCT CATEGORY BY ID
    useEffect(()=>{
const fetchPoductCategoryById = async ()=>{
    setLoading(true)
    try {
        const response = await GetProductCategorybyIdApi()
    } catch (error) {
        
    }
}
    }, [])

    // LOGO UPLOAD LOGIC (FIXED)
    const handleImageUpload = (e) => {
        const file = e.target.files[0]
        if (!file) return

        if (!file.type.startsWith('image/')) {
            alert('Please upload a valid image')
            return
        }

        setLogo(file)
        setPreviewLogo(URL.createObjectURL(file))
    }

    // Submit product category
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)

            // FORM DATA WITH LOGO
            const formData = new FormData()
            formData.append('categoryName', productCategory)
            formData.append('description', description)

            if (logo) {
                formData.append('logo', logo)
            }

            const res = await AddNewProductCategoryApi(formData)

            if (res?.error) {
                alert(res.message)
            } else {
                alert('Product category added successfully')
                setProductCategory('')
                setDescription('')
                setLogo(null)
                setPreviewLogo(null)
                navigate('/')
            }

        } catch (error) {
            console.error(error)
            alert('Something went wrong')
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className='w-full mt-[100px] pb-[40px]'>
            <header className='container pl-6 mb-5'>
                <h2 className='bg-orange-600 w-fit p-2 text-white'>Update Product Category</h2>
            </header>

            <div className='w-full flex items-center justify-center'>
                <div className="w-[50%] flex items-center justify-between bg-white py-5 px-5 gap-3 flex-wrap">

                    <form
                        className='border-r-2 w-[49%] px-3'
                        onSubmit={handleSubmit}
                    >
                        <div className='form-group mb-4 w-full'>
                            <h4 className='form-group mb-4 w-full'>Category Name</h4>
                            <input
                                type="text"
                                className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3'
                                placeholder='Product Category'
                                value={productCategory}
                                onChange={(e) => setProductCategory(e.target.value)}
                                required
                            />
                        </div>

                        <div className='form-group mb-4 w-full'>
                            <h4 className='form-group mb-4 w-full'>Category Logo</h4>
                            <Button
                                component="label"
                                variant="outlined"
                                startIcon={<CloudUploadIcon />}
                            >
                                Upload Files
                                <VisuallyHiddenInput
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                />
                            </Button>
                        </div>

                        <div className='form-group mb-4 w-full'>
                            <h4 className='form-group mb-4 w-full'>Description</h4>
                            <input
                                type="text"
                                className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3'
                                placeholder='Product Category Description'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        <Button
                            className='w-fit'
                            variant="contained"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? 'Saving...' : 'Add Product Category'}
                        </Button>
                    </form>

                    <div className='w-[49%] px-3'>
                        <div className='flex flex-wrap gap-3 mt-3'>

                            {/* LARGE IMAGE */}
                            <div className='w-full h-[300px] border rounded overflow-hidden mb-3 group'>
                                <img
                                    src={previewLogo}
                                    alt='Product Category Logo'
                                    className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-125'
                                />
                            </div>
                        </div>
                        <h2 className='mb-2'>
                            Product Category  :
                            <span className='text-gray-500'>
                                {' '}{productCategory || '---'}
                            </span>
                        </h2>
                        <p>Description :
                            <span className='text-gray-500'>
                                {' '}{description || '.....'}
                            </span>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
