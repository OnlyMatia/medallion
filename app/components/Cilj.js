"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Cilj () {
    const [currentImg, setImg] = useState(0)
    
    return (
        <section className="min-h-[90vh] w-full flex justify-center items-center">

            <div className="flex flex-col md:flex-row justify-center gap-10 lg:gap-20 items-center max-w-7xl w-full md:py-5 px-2">
                <div className="flex flex-col gap-7  w-full md:px-0 md:w-1/2">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl ">
                        Koji je naš cilj
                    </h2>
                    

                    <p className="text-sm md:text-base">
                        Hercegovačka izba naziv je inspiriran starom riječju za sušnicu, središnje mjesto svakog doma. Mi smo obiteljska firma s misijom da oživimo ćupter, tradicionalnu hercegovačku slasticu. Kroz naše proizvode čuvamo gastronomsku baštinu i duh zajedništva, podsjećajući da Hercegovina nije samo prostor, već i način života.
                    </p>

                    <button className="border w-fit px-2 py-1 ">
                        <Link href="#" className="flex items-center gap-1 hover:scale-[0.95] duration-300">
                            Saznaj Više →
                        </Link>
                    </button>
                </div>

                <div className="bg-[#d7d7d7] relative overflow-hidden w-full max-w-[400px] lg:max-w-[500px] aspect-square mx-auto inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full group">
                        <Image
                        src="/crveni.png"
                        width={300}
                        height={300}
                        alt="mask"
                        className="absolute top-1/2 z-10 -translate-y-1/2 right-5 md:right-20 group-hover:right-0 group-hover:scale-[1.05] duration-500"
                        />
                        <Image
                            src="/plavi.png"
                            width={300}
                            height={300}
                            alt="mask"
                            className="absolute top-1/2 -translate-y-1/2 left-5 md:left-20 group-hover:left-0 group-hover:scale-[1.05] duration-500"
                            style={{zIndex: currentImg}}
                        />
                    </div>
                    
                    <div className="absolute left-1 bottom-1 flex flex-row gap-1">
                        <div className=" bg-[#B11010] p-2 cursor-pointer" onClick={() => setImg(0)} />
                        <div className=" bg-[#3E2C7C] p-2 cursor-pointer" onClick={() => setImg(20)} />
                    </div>
                    <span className="absolute right-1 bottom-1 text-xs text-black/30 italic z-30 ">
                        [Ćupter Pakiranje]
                    </span>

                </div>
            </div>

            
        </section>
    )
}