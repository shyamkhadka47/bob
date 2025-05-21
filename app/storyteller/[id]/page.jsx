import React from 'react'

const page = ({params}) => {
console.log(params.id)
    return (
    <div className='py-32'>page {params.id}</div>
  )
}

export default page