import Button from '@mui/material/Button'
import React from 'react'

export default function AddNewProduct() {
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
                                />
                            </div>
                            <div className='form-group mb-4 w-full'>
                                <h4 className='form-group mb-4 w-full'>Product Category</h4>
                                <input
                                    type="text"
                                    className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3'
                                    placeholder='Product Category'
                                />
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <div className='form-group mb-4 w-full'>
                                <h4 className='form-group mb-4 w-full'>Old Price</h4>
                                <input
                                    type="text"
                                    className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3'
                                    placeholder='Old Price'
                                />
                            </div>
                            <div className='form-group mb-4 w-full'>
                                <h4 className='form-group mb-4 w-full'>New Price</h4>
                                <input
                                    type="text"
                                    className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3'
                                    placeholder='New Price'
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
                                />
                            </div>
                            <div className='form-group mb-4 w-full'>
                                <h4 className='form-group mb-4 w-full'>Available Stock</h4>
                                <input
                                    type="text"
                                    className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3'
                                    placeholder='Available Stock'
                                />
                            </div>
                        </div>
                        <div className='form-group mb-4 w-full'>
                            <h4 className='form-group mb-4 w-full'>Long Description</h4>
                            <input
                                type="text"
                                className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3'
                                placeholder='Logn Description'
                            />
                        </div>
                        <div className='form-group mb-4 w-full'>
                            <h4 className='form-group mb-4 w-full'>Short Description</h4>
                            <input
                                type="text"
                                className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3'
                                placeholder='Short Description'
                            />
                        </div>
                        <div className='flex gap-3'>
                            <div className='form-group mb-4 w-full'>
                                <h4 className='form-group mb-4 w-full'>Product Banners</h4>
                                <input
                                    type="file"
                                    className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3'
                                />
                            </div>
                            <div className='form-group mb-4 w-full'>
                                <h4 className='form-group mb-4 w-full'>Is Active</h4>
                                <input
                                    type="text"
                                    className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3'
                                    placeholder='Is Active'
                                />
                            </div>
                        </div>
                        <Button className='w-fit' variant="contained">Add Product</Button>
                    </form>
                    <div className='w-[49%] h-full px-3'>
                        <div className='bg-gray-700 !w-[30px], h-[40px]'>
                            <img src="" alt="" className='w-full' />
                        </div>
                        <h2>Product Category : <span className='text-gray-500'>...</span> </h2>
                        <p>Description : <span className='text-gray-500'>...</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
