"use client"
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


const navLinks = [
    {name: "Početna", link:"/"},
    {name: "O Nama", link:"/about"},
    {name: "Kontakt", link:"/contact"},
    {name: "Novosti", link:"/blog"}
]

export default function Nav () {
    const pathname = usePathname()
    const [isOpen, setOpen] = useState(false)
    
    return (
        <nav className="w-full fixed z-40">
            <div className="mt-3 mx-3 px-4 py-2 bg-white/10 backdrop-blur-sm w-fill italic flex flex-row justify-between items-center z-50">
                <Link href="/" className="w-auto max-w-[120px] sm:max-w-[140px] h-auto ">
                    <Image 
                        src="/logo.png"
                        width={120}
                        height={40}
                        priority
                        alt="Medallion | Hercegovačka izba logo"
                        className="w-full h-auto object-contain"
                    />
                </Link>

                <ul className="hidden md:flex flex-row gap-5 text-xl">
                    {navLinks.map((el, i) => {
                        if(pathname === el.link) {
                            return (
                            <li key={i}>
                                <Link href={el.link} className="capitalize">
                                    {el.name}
                                    <span className="w-full h-[1px] block bg-white/30  duration-300 "/>
                                </Link>
                            </li>
                        )
                        }else {
                            return (
                            <li key={i}>
                                <Link href={el.link} className="capitalize group">
                                    {el.name}
                                    <span className="w-0 h-[1px] block bg-white  duration-300 group-hover:w-full"/>
                                </Link>
                            </li>
                        )
                        }
                        
                    })}
                </ul>

                <button className="md:hidden flex flex-row items-center gap-2 cursor-pointer text-sm" onClick={() => setOpen(!isOpen)}>
                    {isOpen ? "Zatvori" : "Meni"}
                    <div className={`flex ${isOpen ? "gap-0" : "gap-1.5"} flex-col items-center`}>
                        <div className={`w-9 bg-white h-[1px] rounded  duration-200  ${isOpen ? "rotate-45 " : ""}`} />
                        <div className={`w-9 bg-white h-[1px] rounded  duration-200  ${isOpen ? "-rotate-45 " : ""}`} />
                    </div>
                </button>

                <Link href="/shop" className="text-xl hover:text-white/50 duration-200 hidden md:block">
                    🛒 Trgovina
                </Link>
            </div>

            <AnimatePresence>
            {isOpen && (
                <motion.div 
                initial={{opacity:0, y:"-100%"}}
                animate={{opacity:1, y: 0}}
                exit={{opacity:0, y:"-100%"}}
                transition={{duration:0.3,stiffness:0}}
                className="absolute w-full md:hidden">
                    <div className=" mx-3 px-4 pb-1 bg-white/10 backdrop-blur-2xl flex flex-col gap-5 ">
                        <ul className="flex flex-col items-center justify-center italic text-2xl text-center border-t ">
                            {navLinks.map((el, i) => {
                                return (
                                <li key={i} className="px-4 py-3 w-full">
                                    <Link href={el.link} className="capitalize px-4 py-3">
                                        {el.name}
                                    </Link>
                                </li>
                                )
                            })}
                        </ul>
                        <div className="w-full h-auto overflow-hidden">
                            <Image 
                                src="/medallion.png"
                                alt="Medallion text logo"
                                width={0} 
                                height={0} 
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                                className="object-contain"
                            />
                            <div className="w-full flex justify-between text-sm py-1">
                                <a href="#">Facebook</a>
                                <span>/Ćupter/</span>
                                <a href="#">Instagram</a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
            </AnimatePresence>
        </nav>
    )
}