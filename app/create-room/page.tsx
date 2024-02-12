import RoomFormPage from '@/components/RoomForm'
import React from 'react'

const CreateRoomPage = () => {
    return (
        <div className='max-w-7xl mx-auto px-6 md:px-12 xl:px-6'>
            <div className='relative pt-80 sm:pt-24 ml-auto flex justify-center items-center h-screen'>
                <div className='w-full flex justify-between'>
                    <RoomFormPage />
                    <div>
                        Hello World
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateRoomPage