import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const menuItems = [
        { name: 'Story', href: '#about' },
        { name: 'Event', href: '#event-details' },
        { name: 'Album', href: '#album' },
        { name: 'RSVP', href: '#comments' },
        { name: 'Gift', href: '#donate' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'py-4' : 'py-8'}`}>
            <nav className="container mx-auto px-4">
                <div className={`mx-auto max-w-4xl glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-700 ${isScrolled ? 'shadow-xl' : 'shadow-none'}`}>
                    <a href="#" className="text-xl italic font-serif tracking-tighter">I&R</a>

                    <div className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-[10px] uppercase tracking-[0.3em] font-light hover:text-muted-foreground transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    <div className="md:hidden">
                        <Button variant="ghost" size="icon" className="hover:bg-transparent" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                        </Button>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8"
                    >
                        {menuItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-2xl italic font-serif"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
