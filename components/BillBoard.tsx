import React, { useCallback } from 'react';
import useBillBoard from '@/hooks/useBillBoard';
import useInfoModal from '@/hooks/useInfoModal';

import {AiOutlineInfoCircle} from 'react-icons/ai';
import PLayButton from './PLayButton';

const BillBoard = () => {
  const { data } = useBillBoard();
  const { openModal } = useInfoModal();
  const handleOpenModal = useCallback(() => {
    openModal(data?.id);
  }, [openModal, data?.id]);

  return (
    <div className="relative h-[56.25vw]">
        <video  
            className='
            w-full
            h-[56.25vw]
            object-cover
            brightness-[67%]
            '
            autoPlay
            muted
            loop
            poster={data?.thumbnailUrl} 
            src={data?.videoUrl}>
            </video>
            <div className='absolute top-[30%] md:top-[40%] ml-4 md:ml-16'>
                <p className='
                text-white 
                text-1xl 
                md:text-5xl 
                h-full 
                w-[80%] 
                lg:text-6xl 
                font-bold 
                drop-shadow-xl'>
                    {data?.title}
                </p>
                <p className='
                text-white
                text-[8px]
                md:text-lg
                mt-3
                md:mt-8
                w-[90%]
                md:w-[80%]
                lg:w-[50%]
                drop-shadow-xl
                '>
                    {data?.description}
                </p>
                <div className='flex flex-row items-center mt-3 md:mt-4 gap-3'>
                    <PLayButton movieId={data?.id}/>
                    <button 
                    onClick={handleOpenModal}
                    className='
                    bg-white
                    text-white
                    bg-opacity-30
                    rounded-md
                    py-2 md:py-2
                    px-2 md:px-3
                    w-auto
                    text-xs lg:text-lg
                    font-semibold
                    flex 
                    flex-row
                    items-center
                    hover:bg-opacity-20
                    transtion
                    '>
                        <AiOutlineInfoCircle className='mr-1'/>
                            More Info
                    </button>
                </div>
            </div>
    </div>
  )
}
export default BillBoard;