import Button from '@mui/material/Button'
import React, { useState } from 'react'

export default function AddNewProductCategory() {
    const [productCategory, setProductCategory] = useState('product category');
    const [description, setDescription] = useState('product category description');

    // onChange Function
    const onChange = () => {

    }

    // Submit produict category
    const handleSubmit = async () => {
        try {
            const formData = {
                setProductCategory: productCategory,
                setDescription: description
            };
        } catch (error) {

        }
    }
    return (
        <div className='w-full mt-[100px]'>
            <header>
                <h2>Add New Product Category</h2>
            </header>
            <div className='w-full flex items-center justify-center'>
                <div className="w-[50%] flex items-center justify-between bg-white py-5 px-5 gap-3 flex-wrap">
                    <form className='border-r-2 w-[49%] px-3'>
                        <div className='form-group mb-4 w-full'>
                            <h4 className='form-group mb-4 w-full'>Category Name</h4>
                            <input
                                type="text"
                                className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3'
                                placeholder='Product Category'
                            />
                        </div>
                        <div className='form-group mb-4 w-full'>
                            <h4 className='form-group mb-4 w-full'>Description</h4>
                            <input
                                type="text"
                                className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3'
                                placeholder='Product Category Description'
                            />
                        </div>
                        <Button className='w-full' variant="contained">Add Product Category</Button>
                    </form>
                    <div className='w-[49%] h-full px-3'>
                        <div className='bg-gray-700 !w-[30px], h-[40px]'>
                            <img src="" alt="" className='w-full' />
                        </div>
                        <h2>Product Category : <span className='text-gray-500'>{productCategory}</span> </h2>
                        <p>Description : <span className='text-gray-500'>{description}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
