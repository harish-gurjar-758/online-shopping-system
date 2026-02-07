import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import ProductListTable from '../../Components/Product/ProductListTable';

// ----- MAIN COMPONANT ----
export default function ProductList() {
    const navigate = useNavigate();

    return (
        <div className='w-full mt-[100px]'>
            <header className='pl-6 mb-5 flex justify-between container'>
                <h2 className='w-fit p-2 font-500'>Product Category List</h2>
                <Button
                    variant="outlined"
                    onClick={() => navigate('/admin/add-product-category')}
                >Add Product</Button>
            </header>
            <div className="container">
                <ProductListTable />
            </div>
        </div>
    )
}
