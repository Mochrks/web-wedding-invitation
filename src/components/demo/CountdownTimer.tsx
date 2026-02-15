import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CountdownTimerProps {
    targetDate: Date
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
    const calculateTimeLeft = useCallback(() => {
        const difference = +targetDate - +new Date()
        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            }
        }

        return timeLeft
    }, [targetDate])

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer)
    }, [calculateTimeLeft])

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl italic mb-4">Counting Down</h2>
                    <div className="w-12 h-[1px] bg-primary/20 mx-auto"></div>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                    {Object.entries(timeLeft).map(([label, value]) => (
                        <div key={label} className="flex flex-col items-center">
                            <div className="w-20 h-24 md:w-28 md:h-32 flex items-center justify-center border border-primary/5 shadow-sm relative overflow-hidden group">
                                <AnimatePresence mode="popLayout">
                                    <motion.span
                                        key={value as number}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -20, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                        className="text-4xl md:text-5xl font-light italic"
                                    >
                                        {value as number}
                                    </motion.span>
                                </AnimatePresence>
                                <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                            </div>
                            <span className="mt-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-light">
                                {label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
