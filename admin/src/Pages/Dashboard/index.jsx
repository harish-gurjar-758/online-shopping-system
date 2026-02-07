import React, { useEffect, useState } from 'react'
import WelcomeSection from '../../Components/Dashboard/WelcomeSection';
import { FiPieChart } from "react-icons/fi";
import { IoStatsChart } from "react-icons/io5";
import { GoGift } from "react-icons/go";
import { RiProductHuntLine } from "react-icons/ri";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { GetTotalCountProductApi, GetTotalCountProductCategoryApi } from '../../apis/api';
import ProductCategoryTable from '../../Components/Dashboard/ProductCategoryTable';
import ProductTable from '../../Components/Dashboard/ProductTable';


export default function Dashboard() {
    const [totalProduct, setTotalProduct] = useState(0);
    const [totalCategory, setTotalCategory] = useState(0);

    useEffect(() => {

        // --- Product Count ----
        const fetchProductCount = async () => {
            const responce = await GetTotalCountProductApi();
            if (responce.success) {
                setTotalProduct(responce.totalProducts);
            }
        };

        // --- Product Category Count -----
        const fetchCategoryCount = async () => {
            const res = await GetTotalCountProductCategoryApi();

            if (res?.success) {
                setTotalCategory(res.totalCategories);
            }
        };

        fetchProductCount();
        fetchCategoryCount();
    }, []);

    return (
        <div className='w-full mt-[100px]'>
            <div className="container">
                <WelcomeSection />

                <div className='w-full flex justify-between gap-5 mt-10'>
                    <div className='flex items-center gap-10 bg-green-500 py-5 px-6 rounded-sm text-white'>
                        <div className='flex items-center'>
                            <FiPieChart className='text-[30px]' />
                            <div className='px-5'>
                                <p className='text-[22px]'>Total User</p>
                                <h1 className='font-bold text-[22px]'>4457</h1>
                            </div>
                        </div>
                        <IoStatsChart className='text-[30px]' />
                    </div>
                    <div className='flex items-center gap-6 bg-blue-500 py-5 px-6 rounded-sm text-white'>
                        <GoGift className='text-[30px]' />
                        <div className='px-5'>
                            <p className='text-[22px]'>Total Order</p>
                            <h1 className='font-bold text-[22px]'>1227</h1>
                        </div>
                        <IoStatsChart className='text-[30px]' />
                    </div>
                    <div className='flex items-center gap-6 bg-blue-800 py-5 px-6 rounded-sm text-white'>
                        <RiProductHuntLine className='text-[30px]' />
                        <div className='px-5'>
                            <p className='text-[22px]'>Total Product</p>
                            <h1 className='font-bold text-[22px]'>{totalProduct}</h1>
                        </div>
                        <IoStatsChart className='text-[30px]' />
                    </div>
                    <div className='flex items-center gap-6 bg-red-500 py-5 px-6 rounded-sm text-white'>
                        <BiSolidCategoryAlt className='text-[30px]' />
                        <div className='px-5'>
                            <p className='text-[22px]'>Total Category</p>
                            <h1 className='font-bold text-[22px]'>{totalCategory}</h1>
                        </div>
                        <IoStatsChart className='text-[30px]' />
                    </div>
                </div>

                <div className='mt-10'>
                    <ProductCategoryTable />
                </div>

                <div className='mt-10'>
                    <ProductTable />
                </div>
            </div>
        </div>
    )
}
