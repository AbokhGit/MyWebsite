import React from "react";
import useMovie from "@/hooks/useMovie";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { useRouter } from "next/router";

const Watch = () => {
    const router = useRouter();
    const {movieId} = router.query;

    const {data} = useMovie(movieId as string);

    return (
        <div className="h-screen w-screen bg-black">
            <nav className="
               fixed
               w-full
               p-4
               z-10
               flex flex-row items-center
               gap-8
             bg-black
                bg-opacity-70
            ">
                <AiOutlineArrowLeft onClick={() => router.push('/')} className='text-white cursor-pointer' size={40}/>
                <p className="text-white text-1xl md:text-3xl font-bold ">
                    {data?.title}
                </p>
            </nav>
            
            <video 
            controls
            className="
            h-full w-full
            "
            poster={data?.thumbnailUrl}
            src={data?.videoUrl}></video>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2615067240084342"
     crossOrigin="anonymous"></script>
        </div>
    )
}

export default Watch;