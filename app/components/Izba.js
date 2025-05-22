"use client"

import { AnimatePresence, hover, motion } from "framer-motion";
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";

const Izba = () => {
    const colors = ["white", "#980E0E", "#0E4632", "#080864", ];

    const [colorIndex, setColorIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setPrevIndex(colorIndex);
        setColorIndex((prev) => (prev + 1) % colors.length);
        }, 5000); 

        return () => clearInterval(interval);
    }, [colorIndex]);

    return (
        <section className="min-h-[90vh] w-full bg-[#d7d7d7] flex justify-center items-center">

            <div className="flex flex-col-reverse md:flex-row justify-center gap-10 lg:gap-20 items-center max-w-7xl w-full md:py-5 px-2">
                <div className="relative overflow-hidden w-full max-w-[400px] lg:max-w-[500px] aspect-square mx-auto">
                <Image
                    src="/change.png"
                    fill
                    alt="mask"
                    className="absolute inset-0 z-30 pointer-events-none  "
                />
                <span className="absolute right-1 bottom-1 text-xs text-white/30 italic z-30">
                    [Hercegovačka Izba - Medallion]
                </span>

                <div
                    style={{
                    backgroundColor: colors[prevIndex],
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 10,
                    }}
                />

                <AnimatePresence>
                    <motion.div
                    key={colorIndex}
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    style={{
                        backgroundColor: colors[colorIndex],
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 20,
                    }}
                    />
                </AnimatePresence>
                </div>


                <div className="flex flex-col gap-4 text-black w-full md:px-0 md:w-1/2">
                    <div>
                        <span className="text-sm">Tko smo mi?</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl ">
                            Hercegovačka <br/> Izba
                        </h2>
                    </div>

                    <p className="text-sm md:text-base">
                        Hercegovačka izba naziv je inspiriran starom riječju za sušnicu, središnje mjesto svakog doma. Mi smo obiteljska firma s misijom da oživimo ćupter, tradicionalnu hercegovačku slasticu. Kroz naše proizvode čuvamo gastronomsku baštinu i duh zajedništva, podsjećajući da Hercegovina nije samo prostor, već i način života.
                    </p>

                    <button className="border w-fit px-2 py-1 ">
                        <Link href="#" className="flex items-center gap-1 hover:scale-[0.95] duration-300">
                            Saznaj Više →
                        </Link>
                    </button>
                </div>
            </div>

        </section>
    )
}

export default Izba