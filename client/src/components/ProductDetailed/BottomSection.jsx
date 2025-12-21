import React, { useState } from 'react';

export default function BottomSection() {
    const [activeTab, setActiveTab] = useState("description");

    return (
        <div className='container border-b-2 pb-6'>
            {/* Tabs */}
            <div className='flex gap-8 text-[20px]'>
                <div
                    onClick={() => setActiveTab("description")}
                    className={`cursor-pointer link transition
                        ${activeTab === "description" 
                            ? "text-primary font-semibold border-b-2 border-primary"
                            : "text-gray-500"
                        }`}
                >
                    Description
                </div>

                <div
                    onClick={() => setActiveTab("reviews")}
                    className={`cursor-pointer link transition
                        ${activeTab === "reviews" 
                            ? "text-primary font-semibold border-b-2 border-primary"
                            : "text-gray-500"
                        }`}
                >
                    Reviews (4)
                </div>
            </div>

            {/* Content */}
            <div className='mt-6'>
                {/* Description */}
                {activeTab === "description" && (
                    <p className='text-gray-600 leading-relaxed'>
                        This is the product description. You can write full
                        details about the product here including materials,
                        quality, usage, and warranty information.
                    </p>
                )}

                {/* Reviews */}
                {activeTab === "reviews" && (
                    <div className='border p-4 rounded-md'>
                        <h3 className='text-lg font-semibold mb-3'>
                            Customer Reviews
                        </h3>

                        <div className='space-y-3'>
                            <div className='border-b pb-2'>
                                ⭐⭐⭐⭐☆
                                <p className='text-sm text-gray-600'>
                                    Good quality product, worth the price.
                                </p>
                            </div>

                            <div className='border-b pb-2'>
                                ⭐⭐⭐⭐⭐
                                <p className='text-sm text-gray-600'>
                                    Excellent! Highly recommended.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
