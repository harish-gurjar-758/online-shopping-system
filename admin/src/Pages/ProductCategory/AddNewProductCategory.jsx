import React from 'react'

export default function AddNewProductCategory() {
    return (
        <div className='w-full mt-[100px]'>
            <header>
                <h2>Add New Product Category</h2>
            </header>
            <div className="container">
                <form className='w-full px-8 mt-3'>
                    <div className='form-group mb-4 w-full'>
                        <h4 className='form-group mb-4 w-full'>Category Name</h4>
                        <input
                            type="text"
                            className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3'
                            placeholder='Product Category'
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}
