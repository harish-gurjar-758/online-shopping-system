import Button from '@mui/material/Button'
import React from 'react'
import CategoryListTable from '../../Components/ProductCategory/CategoryListTable'

export default function ProductCategoryList() {
    return (
        <div className='w-full mt-[100px]'>
            <header className='pl-6 mb-5 flex justify-between container'>
                <h2 className='w-fit p-2 font-500'>Product Category List</h2>
                <Button
                    variant="outlined"
                >Add Product Category</Button>
            </header>
            <div className="container">
                <CategoryListTable />
            </div>
        </div >
    )
}
