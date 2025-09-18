import React, { useEffect, useState } from 'react'
import Card from './Card'

const OnlineDelivery = () => {
    const [data, setData] = useState([]);

    const fetchTopRes = async () => {
        const response = await fetch('http://localhost:5000/top-restaurant-chains');
        const apiData = await response.json();
        setData(apiData);
    }

    useEffect(
        () => {
            fetchTopRes();
        }, []
    )

    return (
        <div className='max-w-[1200px] mx-auto overflow-hidden'>
            <div className='flex my-3 items-center justify-between'>
                <div className='text-[25px] font-bold'>Resturents with online delivery in Chingrighata</div>
            </div>
            <div className='grid grid-cols-4 gap-2'>
                {
                    data.map(
                        (d, i) => {
                            return <Card {...d} key={i} />
                        }
                    )
                }
            </div>
        </div>
    )
}

export default OnlineDelivery
