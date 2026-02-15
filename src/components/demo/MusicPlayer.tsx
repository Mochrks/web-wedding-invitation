import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Music, Play } from 'lucide-react'
import audio from "../../assets/audio/audio1.mp3"

export function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(true)
    const [showInfo, setShowInfo] = useState(true)
    const audioRef = useRef<HTMLAudioElement>(null)

    useEffect(() => {
        const infoTimeout = setTimeout(() => setShowInfo(false), 8000)
        return () => clearTimeout(infoTimeout)
    }, [])

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch(err => console.log("Audio play blocked", err))
            } else {
                audioRef.current.pause()
            }
        }
    }, [isPlaying])

    return (
        <div className="fixed bottom-8 right-8 z-[60] flex items-center gap-4">
            <AnimatePresence>
                {showInfo && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="bg-background/80 backdrop-blur-md border border-primary/10 px-4 py-2 shadow-sm pointer-events-none"
                    >
                        <p className="text-[10px] uppercase tracking-[0.2em] font-medium">Lagu Pernikahan Kita</p>
                        <p className="text-[9px] uppercase tracking-[0.1em] opacity-50">Tiara Andini, Arsy Widianto</p>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative">
                <audio ref={audioRef} loop src={audio} />
                <motion.button
                    onClick={() => setIsPlaying(!isPlaying)}
                    animate={{ rotate: isPlaying ? 360 : 0 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-700 ${isPlaying ? 'bg-primary text-primary-foreground border-primary' : 'bg-background text-primary border-primary/20'}`}
                >
                    {isPlaying ? <Music className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </motion.button>

                {isPlaying && (
                    <motion.div
                        className="absolute inset-0 rounded-full border border-primary/20"
                        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    />
                )}
            </div>
        </div>
    )
}
