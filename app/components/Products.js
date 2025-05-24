'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState } from 'react'

const featuredWorks = [
  {
    title: 'Žilavka',
    subtitle: 'Ćupter Slatkiš',
    image: '/plavi.png',
  },
  {
    title: 'Blatina',
    subtitle: 'Ćupter Slatkiš',
    image: '/crveni.png',
  },
  {
    title: 'Crveno Pakiranje',
    subtitle: 'Crveni omot za Ćupter',
    image: '/plavi.png',
  },
  {
    title: 'Bijelo Pakiranje',
    subtitle: 'Bijeli omot za Ćupter',
    image: '/crveni.png',
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
        const walk = (x - startX) * 1.5 // osjetljivost
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
        <h2 className="text-2xl md:text-4xl font-bold mb-6">Naši Produkti</h2>

        {isHovering && (
            <div className='fixed z-30 font-semibold bg-white text-black px-3 py-1 rounded-full pointer-events-none '
            style={{
                top: hoverPos.y + 10,
                left: hoverPos.x + 10,
            }}>
                Povuci
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
            <motion.div
            className="flex gap-6 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            onMouseEnter={handleHoverEnter}
            onMouseMove={handleHoverMove}
            onMouseLeave={handleHoverLeave}
            >

            {featuredWorks.map((work, index) => (
                <motion.div
                key={index}
                className="min-w-[280px] md:min-w-[360px] flex-shrink-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                >
                <div className="relative w-full h-64 md:h-80 bg-white overflow-hidden flex items-center justify-center">
                    <Image
                    src={work.image}
                    alt={work.title}
                    layout="fill"
                    objectFit="contain"
                    draggable={false}
                    />
                </div>
                </motion.div>
            ))}
            </motion.div>
        </div>
        </section>
    )
}

export default Products
