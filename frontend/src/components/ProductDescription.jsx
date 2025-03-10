import React from 'react'

const ProductDescription = () => {
  return (
    <div className='ring-1 ring-slate-900/10 rounded-lg'>
      <div className='flex gap-3'>
        <button className='medium-14 p-3 w-32 border-b-2 border-secondary'>Description</button>
        <button className='medium-14 p-3 w-32'>Care Guide</button>
        <button className='medium-14 p-3 w-32'>Size Guide</button>
      </div>
      <hr className='h-[1px] w-full'/>
      <div className='flex flex-col gap-3 p-3'>
        <div>
          <h5 className='h5'>Detail</h5>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur adisicing elit. Molestiae dicta adipisci nihil deserunt delectus? Dignissimos, numquameum, voluptates reiciendis ipsa maxime enim quasi praesentium est totam neque dolores quam
          </p>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatem magni cupiditate in voluptates non ea.
          </p>
        </div>
        <div>
          <h5 className='h5'>Benefit</h5>
          <ul className='list-disc pl-5 text-sm text-gray-30 flex flex-col gap-1'>
            <li>
              High-quality materials ensure long-lasting durability and comfort.
            </li>
            <li>
              Designed to meet the needs of modern, active lifestyles.
            </li>
            <li>
              Available in a wide range of sizes and trendy colors.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProductDescription