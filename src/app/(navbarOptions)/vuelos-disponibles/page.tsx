import SkeletonCard from '@/components/Skeleton/skeleton'
import { Ticket2 } from '@/components/ticket/Ticket'
import React, { Suspense } from 'react'

  const VuelosDisponibles = () => {
  return (
    <div className='flex justify-center items-center h-screen '>

        <Suspense fallback={<SkeletonCard/>}>
        <Ticket2 />
        </Suspense>
    </div>
  )
}

export default VuelosDisponibles