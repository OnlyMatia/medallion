"use client"

import Image from "next/image"
import { useRef, useState } from "react"

const Header = () => {
    const videoRef = useRef(null)
    const [isMuted, setMuted] = useState(true)
    const [isPlaying, setPlaying] = useState(true)

    const toggleSound = () => {
        if(videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted
            setMuted(videoRef.current.muted)
        }
    }

    const togglePlay = () => {
        if(videoRef.current){
            if(videoRef.current.paused) {
                videoRef.current.play()
                setPlaying(true)
            }else {
                videoRef.current.pause()
                setPlaying(false)
            }
        }
    }

    return (
        <header className="w-full min-h-[70vh] flex flex-col ">

            <div className="w-full lg:w-3/4 py-[8vw] md:py-[4vw] lg:py-[2vw] italic px-1 md:px-3 ">
                <h1 className="text-4xl md:text-5xl lg:text-7xl mb-3">
                    Ćupter - Prirodni Hercegovački slatkiš od autohtonih sorti grožđa.
                </h1>
                <p className="text-base md:text-xl py-2 opacity-[0.7]">
                    Otkrijte zaboravljeni slatkiš s bogatom poviješću.
                </p>
            </div>

            <div className="w-full flex justify-between text-sm opacity-[0.4] italic py-1 md:px-3">
                <span>
                    Ćupter
                </span>
                <span>
                    Hercegovačka izba
                </span>
            </div>

            <div className="relative w-full h-[33vh] sm:h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden md:px-3">
                <video 
                ref={videoRef}
                src="/reklama.mp4"
                autoPlay
                loop
                playsInline
                muted={isMuted}
                
                className="w-full h-full object-cover " >
                    Hercegovačka izba prezentira prvu reklamu Ćuptera - Medallion Cupter
                </video>

                <div className="absolute bottom-4 left-4 flex gap-2 z-10 w-10 h-10">
                    <Image src="/medallion-logo.png"
                        width={100}
                        height={100}
                        alt="Medallion official logo"
                        className=""
                    />
                </div>

                <div className="absolute bottom-4 right-4 flex gap-2 z-10 ">
                    <Image 
                    src={isPlaying ? "/pause.png" : "/play.png"}
                    width={50}
                    height={50}
                    alt="pokreni/zaustavi cupter medallion reklamu"
                    className="cursor-pointer  w-7 h-7"
                    onClick={togglePlay} />

                    <Image 
                    src={isMuted ? "/soundoff.png" : "/soundon.png"}
                    width={50}
                    height={50}
                    alt="ugasi zvuk cupter medallion reklame"
                    className="cursor-pointer  w-7 h-7" 
                    onClick={toggleSound}
                    />
                </div>
            </div>

            <div className="w-full px-1 md:px-3 opacity-[0.4] italic py-1 text-sm">
                <p>[Ćupter reklama.mp4]</p>
            </div>
        </header>
    )
}

export default Header