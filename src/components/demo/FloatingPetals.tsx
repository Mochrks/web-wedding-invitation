import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const PETAL_COUNT = 15

interface Petal {
    id: number
    x: number
    y: number
    size: number
    duration: number
    delay: number
    rotation: number
}

export function FloatingPetals() {
    const [petals, setPetals] = useState<Petal[]>([])

    useEffect(() => {
        const newPetals = Array.from({ length: PETAL_COUNT }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: -20,
            size: Math.random() * 10 + 5,
            duration: Math.random() * 10 + 10,
            delay: Math.random() * 10,
            rotation: Math.random() * 360
        }))
        setPetals(newPetals)
    }, [])

    return (
        <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
            {petals.map((petal) => (
                <motion.div
                    key={petal.id}
                    initial={{
                        opacity: 0,
                        x: `${petal.x}%`,
                        y: '-10%',
                        rotate: petal.rotation
                    }}
                    animate={{
                        opacity: [0, 0.4, 0.4, 0],
                        y: '110%',
                        x: [`${petal.x}%`, `${petal.x + (Math.random() * 10 - 5)}%`],
                        rotate: petal.rotation + 360
                    }}
                    transition={{
                        duration: petal.duration,
                        repeat: Infinity,
                        delay: petal.delay,
                        ease: "linear"
                    }}
                    style={{
                        width: petal.size,
                        height: petal.size,
                    }}
                    className="absolute bg-primary/5 rounded-full blur-[1px]"
                >
                    {/* Floral shape using clip-path */}
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                            background: 'currentColor'
                        }}
                    />
                </motion.div>
            ))}
        </div>
    )
}
