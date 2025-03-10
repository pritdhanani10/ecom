import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const ShowSearch = () => {

    const {search, setSearch, showSearch} = useContext(ShopContext)
    const [visible, setVisible] = useState(false)
    const location = useLocation()

    useEffect(()=>{
        if (location.pathname.includes('collection')) {
            setVisible(true)         
        }else{
            setVisible(false)
        }
    }, [location])

  return showSearch && visible ? (
    <div className='py-4 pb-7'>
        <div className='text-center'>
            <div className='inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-white overflow-hidden w-full'>
                <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search here...' className='border-none outline-none w-full bg-white text-sm'/>
                <div className='bg-white text-center'>
                    <FaSearch className='cursor-pointer'/>
                </div>
            </div>
        </div>
    </div>
  ) : null
}

export default ShowSearch