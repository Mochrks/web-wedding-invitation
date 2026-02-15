import { motion } from 'framer-motion'
import { MailOpen } from 'lucide-react'
import { sembilan } from '@/assets'

interface InvitationCoverProps {
    onOpen: () => void
    coupleNames: string
    date: string
}

export function InvitationCover({ onOpen, coupleNames, date }: InvitationCoverProps) {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-background"
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                    className="w-full h-full bg-cover bg-center grayscale-[30%]"
                    style={{ backgroundImage: `url(${sembilan})` }}
                />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center text-white px-4">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-xs uppercase tracking-[0.5em] mb-8 font-light"
                >
                    The Wedding Of
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                    className="text-6xl md:text-8xl font-calligraphy mb-6"
                >
                    {coupleNames}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="w-12 h-[1px] bg-white/30 mx-auto mb-8"
                />

                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="text-lg md:text-xl font-light italic mb-12 tracking-widest"
                >
                    {date}
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                    onClick={onOpen}
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-xs uppercase tracking-[0.3em] transition-all hover:bg-black hover:text-white overflow-hidden"
                >
                    <MailOpen className="w-4 h-4 transition-transform group-hover:rotate-12" />
                    Open Invitation
                </motion.button>
            </div>

            {/* Decorative Corners */}
            <div className="absolute top-10 left-10 w-20 h-20 border-t border-l border-white/20 z-20" />
            <div className="absolute top-10 right-10 w-20 h-20 border-t border-r border-white/20 z-20" />
            <div className="absolute bottom-10 left-10 w-20 h-20 border-b border-l border-white/20 z-20" />
            <div className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-white/20 z-20" />
        </motion.div>
    )
}
