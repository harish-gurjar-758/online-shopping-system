import Button from '@mui/material/Button'
import React, { useEffect, useState } from 'react'

import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { styled } from '@mui/material/styles'
import { GetAllProductCategoryApi } from '../../apis/api'

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
})

export default function AddNewProduct() {
    const [activeImage, setActiveImage] = useState(null);
    const [productCategories, setProductCategories] = useState([]);
    const [loadingCategories, setLoadingCategories] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        oldPrice: '',
        newPrice: '',
        longDescription: '',
        shortDescription: '',
        productSizes: '',
        availableStock: '',
        isActive: ''
    });


    const [images, setImages] = useState([])

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setLoadingCategories(true);
                const res = await GetAllProductCategoryApi();

                if (!res?.error && Array.isArray(res.productCategories)) {
                    setProductCategories(res.productCategories);
                }
            } catch (error) {
                console.error("Failed to fetch product categories", error);
            } finally {
                setLoadingCategories(false);
            }
        };

        fetchCategories();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files)
        setImages(files)
    }


    const handleCategoryChange = (e) => {
        setFormData(prev => ({
            ...prev,
            category: e.target.value,
        }));
    };

    return (
        <div className='w-full mt-[100px] pb-[40px]'>
            <header className='pl-6 mb-5'>
                <h2 className='bg-orange-600 w-fit p-2 text-white'>Add New Product</h2>
            </header>
            <div className='w-full flex items-center justify-center'>
                <div className='w-[80%] flex items-center justify-between bg-white py-5 px-5 gap-3 flex-wrap'>
                    <form className='border-r-2 w-[49%] px-3'>
                        <div className='flex gap-3'>
                            <div className='form-group mb-4 w-full'>
                                <h4 className='form-group mb-4 w-full'>Product Title</h4>
                                <input
                                    type="text"
                                    className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3'
                                    placeholder='Product Title'
                                    name='title'
                                    value={formData.title}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='form-group mb-4 w-full'>
                                <h4 className='form-group mb-4 w-full'>Product Category</h4>
                                <select
                                    name='category'
                                    className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3'
                                    placeholder='Product Category'
                                    value={formData.category}
                                    onChange={handleCategoryChange}
                                >


                                    <option value="" disabled>
                                        {loadingCategories ? "Loading..." : "Select Product Category"}
                                    </option>

                                    {productCategories.map(item => (
                                        <option key={item._id} value={item._id}>
                                            {item.categoryName}
                                        </option>
                                    ))}
                                </select>

                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <div className='form-group mb-4 w-full'>
                                <h4 className='form-group mb-4 w-full'>Old Price</h4>
                                <input
                                    type="text"
                                    className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3'
                                    placeholder='Old Price'
                                    name='oldPrice'
                                    value={formData.oldPrice}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='form-group mb-4 w-full'>
                                <h4 className='form-group mb-4 w-full'>New Price</h4>
                                <input
                                    type="text"
                                    className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3'
                                    placeholder='New Price'
                                    name='newPrice'
                                    value={formData.newPrice}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <div className='form-group mb-4 w-full'>
                                <h4 className='form-group mb-4 w-full'>Product Sizes</h4>
                                <input
                                    type="text"
                                    className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3'
                                    placeholder='Product Sizes'
                                    name='productSizes'
                                    value={formData.productSizes}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='form-group mb-4 w-full'>
                                <h4 className='form-group mb-4 w-full'>Available Stock</h4>
                                <input
                                    type="text"
                                    className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3'
                                    placeholder='Available Stock'
                                    name='availableStock'
                                    value={formData.availableStock}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='form-group mb-4 w-full'>
                            <h4 className='form-group mb-4 w-full'>Long Description</h4>
                            <input
                                type="text"
                                className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3'
                                placeholder='Logn Description'
                                name='longDescription'
                                value={formData.longDescription}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group mb-4 w-full'>
                            <h4 className='form-group mb-4 w-full'>Short Description</h4>
                            <input
                                type="text"
                                className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3'
                                placeholder='Short Description'
                                name='shortDescription'
                                value={formData.shortDescription}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='flex gap-3'>
                            <div className='form-group mb-4 w-full'>
                                <h4 className='form-group mb-4 w-full'>Product Banners</h4>
                                {/* <input
                                    type="file"
                                    className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3'
                                /> */}
                                <Button
                                    component="label"
                                    variant="outlined"
                                    startIcon={<CloudUploadIcon />}
                                >
                                    Upload Files
                                    <VisuallyHiddenInput
                                        type="file"
                                        multiple
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                    />
                                </Button>
                            </div>
                            <div className='form-group mb-4 w-full'>
                                <h4 className='form-group mb-4 w-full'>Is Active</h4>
                                <input
                                    type="text"
                                    className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3'
                                    placeholder='Is Active'
                                    name='isActive'
                                    value={formData.isActive}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <Button className='w-fit' variant="contained">Add Product</Button>
                    </form>

                    {/* ------ */}
                    <div className='w-[49%] h-full px-3'>
                        <div className='flex flex-wrap gap-3 mt-3'>

                            {/* LARGE IMAGE */}
                            <div className='w-full h-[300px] border rounded overflow-hidden mb-3 group'>
                                {activeImage ? (
                                    <img
                                        src={activeImage}
                                        alt="Selected"
                                        className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-125'
                                    />
                                ) : (
                                    <div className='w-full h-full flex items-center justify-center text-gray-400'>
                                        Select an image
                                    </div>
                                )}
                            </div>

                            {/* THUMBNAILS */}
                            <div className='flex flex-wrap gap-3'>
                                {images.length > 0 ? (
                                    images.map((img, index) => {
                                        const imgUrl = URL.createObjectURL(img)

                                        return (
                                            <img
                                                key={index}
                                                src={imgUrl}
                                                alt="preview"
                                                onMouseEnter={() => setActiveImage(imgUrl)}
                                                onClick={() => setActiveImage(imgUrl)}
                                                className='w-[90px] h-[90px] object-cover border rounded cursor-pointer hover:border-orange-500'
                                            />
                                        )
                                    })
                                ) : (
                                    <p className='text-gray-400'>No images uploaded</p>
                                )}
                            </div>
                        </div>
                        <h2 className='mb-2'>
                            Product Title :
                            <span className='text-gray-500'>
                                {' '}{formData.title || '---'}
                            </span>
                        </h2>
                        <div className='flex gap-4 my-3'>
                            <p>Old Price :
                                <span className='text-red-600 line-through text-[22px] font-500'>
                                    {' '} {formData.oldPrice || "....."}{' '}₹
                                </span>
                            </p>
                            <p>New Price :
                                <span className='text-green-600 text-[22px] font-500 '>
                                    {' '}{formData.newPrice || "....."}{' '}₹
                                </span>
                            </p>

                        </div>
                        <p>Product Sizes :
                            <span className='text-gray-500'>
                                {' '}{formData.productSizes || '.....'}
                            </span>
                        </p>
                        <p>Available Stock :
                            <span className='text-gray-500'>
                                {' '}{formData.availableStock || '.....'}
                            </span>
                        </p>
                        <p>Is Active :
                            <span className='text-gray-500'>
                                {' '}{formData.isActive || '.....'}
                            </span>
                        </p>
                        <p>Short Description :
                            <span className='text-gray-500'>
                                {' '}{formData.shortDescription || '.....'}
                            </span>
                        </p>
                        <p>Long Description :
                            <span className='text-gray-500'>
                                {' '}{formData.longDescription || '.....'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
