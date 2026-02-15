import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Masonry from 'react-masonry-css'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { satu, dua, tiga, empat, lima, enam, tujuh, delapan, sembilan, spuluh, irfan, is } from '@/assets'

interface Photo {
    id: number
    src: string
    alt: string
    category: string
}

const photos: Photo[] = [
    { id: 1, src: satu, alt: 'Wedding photo 1', category: 'ceremony' },
    { id: 2, src: dua, alt: 'Wedding photo 2', category: 'reception' },
    { id: 3, src: tiga, alt: 'Wedding photo 3', category: 'portraits' },
    { id: 4, src: empat, alt: 'Wedding photo 4', category: 'ceremony' },
    { id: 5, src: lima, alt: 'Wedding photo 5', category: 'reception' },
    { id: 6, src: enam, alt: 'Wedding photo 6', category: 'portraits' },
    { id: 7, src: tujuh, alt: 'Wedding photo 7', category: 'ceremony' },
    { id: 8, src: delapan, alt: 'Wedding photo 8', category: 'reception' },
    { id: 9, src: sembilan, alt: 'Wedding photo 9', category: 'portraits' },
    { id: 10, src: is, alt: 'Wedding photo 10', category: 'portraits' },
    { id: 11, src: spuluh, alt: 'Wedding photo 11', category: 'portraits' },
    { id: 12, src: irfan, alt: 'Wedding photo 12', category: 'portraits' },
]

const categories = ['all', 'ceremony', 'reception', 'portraits']

export function PhotoGallery() {
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
    const [currentCategory, setCurrentCategory] = useState('all')
    const [filteredPhotos, setFilteredPhotos] = useState(photos)
    const [isLightboxOpen, setIsLightboxOpen] = useState(false)

    useEffect(() => {
        setFilteredPhotos(
            currentCategory === 'all'
                ? photos
                : photos.filter(photo => photo.category === currentCategory)
        )
    }, [currentCategory])

    const openLightbox = (photo: Photo) => {
        setSelectedPhoto(photo)
        setIsLightboxOpen(true)
    }

    const closeLightbox = () => {
        setIsLightboxOpen(false)
    }

    const navigatePhoto = (direction: 'prev' | 'next') => {
        if (!selectedPhoto) return
        const currentIndex = filteredPhotos.findIndex(photo => photo.id === selectedPhoto.id)
        const newIndex = direction === 'prev'
            ? (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length
            : (currentIndex + 1) % filteredPhotos.length
        setSelectedPhoto(filteredPhotos[newIndex])
    }

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    }

    return (
        <section id="album" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl italic mb-4">Our Album</h2>
                    <div className="w-12 h-[1px] bg-primary/20 mx-auto mb-12"></div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setCurrentCategory(category)}
                                className={`text-[10px] uppercase tracking-[0.3em] transition-all duration-500 pb-1 border-b ${currentCategory === category ? 'text-primary border-primary' : 'text-muted-foreground border-transparent hover:text-primary'}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="flex w-auto -ml-4"
                    columnClassName="pl-4 bg-clip-padding"
                >
                    {filteredPhotos.map((photo, index) => (
                        <motion.div
                            key={photo.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.05 }}
                            className="mb-4"
                        >
                            <div
                                className="relative overflow-hidden cursor-pointer group"
                                onClick={() => openLightbox(photo)}
                            >
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700 flex items-center justify-center">
                                    <span className="text-white text-[10px] uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-opacity duration-700">View</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </Masonry>
            </div>

            <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
                <DialogContent className="max-w-[90vw] md:max-w-[70vw] h-[80vh] bg-black/95 border-none p-0 overflow-hidden rounded-none">
                    <DialogHeader className="hidden">
                        <DialogTitle>Photo View</DialogTitle>
                    </DialogHeader>
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-4 right-4 z-50 text-white hover:bg-white/10"
                            onClick={closeLightbox}
                        >
                            <X className="h-5 w-5" />
                        </Button>

                        <AnimatePresence mode="wait">
                            {selectedPhoto && (
                                <motion.img
                                    key={selectedPhoto.id}
                                    src={selectedPhoto.src}
                                    alt={selectedPhoto.alt}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                    className="max-w-full max-h-full object-contain"
                                />
                            )}
                        </AnimatePresence>

                        <button
                            className="absolute left-4 text-white/50 hover:text-white transition-colors"
                            onClick={() => navigatePhoto('prev')}
                        >
                            <ChevronLeft className="h-10 w-10 stroke-1" />
                        </button>
                        <button
                            className="absolute right-4 text-white/50 hover:text-white transition-colors"
                            onClick={() => navigatePhoto('next')}
                        >
                            <ChevronRight className="h-10 w-10 stroke-1" />
                        </button>
                    </div>
                </DialogContent>
            </Dialog>
        </section>
    )
}
