import React from 'react'
import Button from "@mui/material/Button";

export default function PopularProducts() {
    return (
        <div className='bg-white py-10'>
            <div className='container'>
                <div>
                    <h2 className='font-bold text-[25px]'>Popular Products</h2>
                    <p>Do not miss the current offers until the end of March.</p>
                </div>
                <div>

                </div>
            </div>
            <div>
                <div className="card">
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <p>jewellery</p>
                        <p>Jewellery trendy jewellery...</p>
                        <div>
                            stars
                        </div>
                        <div>
                            <p>cut prise</p>
                            <p>price</p>
                        </div>
                        <Button> Add to cart</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
