import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { satu, dua, sembilan } from '@/assets'

const images = [satu, dua, sembilan]

export function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 6000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="relative h-[90vh] w-full overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0 bg-black/30 z-10" />
                    <img
                        src={images[currentIndex]}
                        alt={`Wedding Preview ${currentIndex + 1}`}
                        className="w-full h-full object-cover grayscale-[20%] sepia-[5%] brightness-[95%]"
                    />
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                >
                    <p className="text-sm uppercase tracking-[0.5em] mb-6 font-light">The Wedding Of</p>
                    <h2 className="text-7xl md:text-9xl font-calligraphy mb-4 leading-tight">Irfan & Rima</h2>
                    <div className="w-16 h-[1px] bg-white/40 mx-auto mb-6" />
                    <p className="text-xl md:text-2xl font-light italic tracking-widest">10 . 11 . 2024</p>
                </motion.div>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-4">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${currentIndex === index ? 'bg-white w-8' : 'bg-white/30'}`}
                    />
                ))}
            </div>

            <div className="absolute left-10 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col gap-8 text-[10px] uppercase tracking-[0.4em] text-white/50 rotate-180 [writing-mode:vertical-lr]">
                <span>Discover Our Love Story</span>
            </div>
        </section>
    )
}
