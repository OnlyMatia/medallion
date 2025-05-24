'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState } from 'react'

const featuredWorks = [
    {
        title: 'Žilavka',
        price: '$5',
        image: '/plavi.png',
    },
    {
        title: 'Blatina',
        price: '$5',
        image: '/crveni.png',
    },
    {
        title: 'Crveno Pakiranje',
        price: '$5',
        image: '/plavi.png',
    },
    {
        title: 'Bijelo Pakiranje',
        price: '$5',
        image: '/crveni.png',
    },
    {
        title: 'Ukrasna vrećica',
        price: '$5',
        image: '/plavi.png',
    },
    {
        title: 'Poklon paket',
        price: '$5',
        image: '/crveni.png',
    },
    {
        title: 'Puna kutija',
        price: '$5',
        image: '/plavi.png',
    },
]

const Products = () => {
    const scrollRef = useRef(null)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)
    const [isHovering, setHovering] = useState(false)
    const [hoverPos, setHoverPos] = useState({x:0,y:0})

    const handleMouseDown = (e) => {
        setIsDragging(true)
        setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0))
        setScrollLeft(scrollRef.current?.scrollLeft || 0)
    }

    const handleMouseLeave = () => {
        setIsDragging(false)
    }

    const handleMouseUp = () => {
        setIsDragging(false)
    }

    const handleMouseMove = (e) => {
        if (!isDragging || !scrollRef.current) return
        e.preventDefault()
        const x = e.pageX - scrollRef.current.offsetLeft
        const walk = (x - startX) * 2 // osjetljivost
        scrollRef.current.scrollLeft = scrollLeft - walk
    }

    const handleHoverEnter = () => {
    setHovering(true)
    }

    const handleHoverMove = (e) => {
        setHoverPos({ x: e.clientX, y: e.clientY });
    }

    const handleHoverLeave = () => {
        setHovering(false)
    }

    return (
        <section className="w-full px-4 md:px-8 py-12">
        <h2 className="text-4xl md:text-6xl mb-10 pb-2 border-b italic">Naši Produkti</h2>

        {isHovering && (
            <div className='fixed z-30 font-semibold bg-white text-black px-3 py-1 rounded-full pointer-events-none '
            style={{
                top: hoverPos.y + 10,
                left: hoverPos.x + 10,
            }}>
                Istraži 
            </div>
        )}

        <div
            ref={scrollRef}
            className={`overflow-x-auto custom-scroll ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
            } select-none`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onDragStart={(e) => e.preventDefault()}
        >
            <div
            className="flex gap-8 "
            onMouseEnter={handleHoverEnter}
            onMouseMove={handleHoverMove}
            onMouseLeave={handleHoverLeave}
            >

            {featuredWorks.map((work, index) => (
                <div
                key={index}
                className="min-w-[200px] md:min-w-[300px] flex-shrink-0"
                >
                <div className="relative w-full h-64 md:h-80 bg-[#d7d7d7] overflow-hidden flex items-center justify-center group">
                    <Image
                    src={work.image}
                    alt={work.title}
                    layout="fill"
                    objectFit="contain"
                    draggable={false}
                    className='group-hover:scale-[0.95] duration-300'
                    />
                </div>
                <div className='flex justify-between opacity-[0.5] italic'>
                    <h3>
                        {work.title}
                    </h3>
                    <p>
                        [{work.price}]
                    </p>
                </div>
                </div>
            ))}
            </div>
        </div>

        <h3 className="text-xl md:text-2xl mt-10 pt-5 border-t text-center ">
            Pogledajte našu ponudu proizvoda →
        </h3>
        </section>
    )
}

export default Products
