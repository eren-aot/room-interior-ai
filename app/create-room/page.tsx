import RoomFormPage from '@/components/RoomForm'
import React from 'react'

const CreateRoomPage = () => {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='flex'>
            <RoomFormPage />
            <div>
                Hello World
            </div>
        </div>
    </div>
  )
}

export default CreateRoomPage