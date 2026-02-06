import Button from '@mui/material/Button'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GetProductCategorybyIdApi, AddNewProductCategoryApi, UpdateProductCategorybyId } from '../../apis/api'
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

    // LOGO STATES
    const [logo, setLogo] = useState(null)
    const [previewLogo, setPreviewLogo] = useState(null)

    const navigate = useNavigate()
    const { id } = useParams()

    // GET PRODUCT CATEGORY BY ID
    useEffect(() => {
        const fetchProductCategoryById = async () => {
            setLoading(true)
            try {
                const res = await GetProductCategorybyIdApi(id)
                if (!res?.error) {
                    setProductCategory(res.productCategory.categoryName)
                    setDescription(res.productCategory.description)
                    setPreviewLogo(res.productCategory.logo) // existing logo
                }
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        fetchProductCategoryById()
    }, [id])

    // LOGO UPLOAD
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

    // SUBMIT UPDATE
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)

            const formData = new FormData()
            formData.append('categoryName', productCategory)
            formData.append('description', description)

            if (logo) {
                formData.append('logo', logo)
            }

            const res = await UpdateProductCategorybyId(formData, id);

            if (res?.error) {
                alert(res.message)
            } else {
                alert('Product category updated successfully')
                navigate('/admin/product-category-list')
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
                            {loading ? 'Saving...' : 'Update Product Category'}
                        </Button>
                    </form>

                    <div className='w-[49%] px-3'>
                        <div className='w-full h-[300px] border rounded overflow-hidden mb-3'>
                            <img
                                src={previewLogo}
                                alt="Category Logo"
                                className='w-full h-full object-cover'
                            />
                        </div>

                        <h2>
                            Product Category :
                            <span className='text-gray-500'> {productCategory || '---'}</span>
                        </h2>

                        <p>
                            Description :
                            <span className='text-gray-500'> {description || '---'}</span>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
