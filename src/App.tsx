import { useState, useEffect } from 'react'
import { Navbar } from '@/components/demo/Navbar'
import { Carousel } from '@/components/demo/Carousel'
import { EventDetails } from '@/components/demo/EventDetails'
import { CommentSection } from '@/components/demo/CommentSection'
import { DonationSection } from '@/components/demo/DonationSection'
import { BankAccounts } from '@/components/demo/BankAccounts'
import { MusicPlayer } from '@/components/demo/MusicPlayer'
import { CountdownTimer } from '@/components/demo/CountdownTimer'
import { About } from '@/components/demo/About'
import { Footer } from '@/components/demo/Footer'
import { PhotoGallery } from './components/demo/PhotoGallery'
import "./App.css"
import { Loading } from './components/demo/Loading'
import { InvitationCover } from './components/demo/InvitationCover'
import { FloatingPetals } from './components/demo/FloatingPetals'
import { AnimatePresence, motion } from 'framer-motion'
export default function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 2000)
  }, [])

  if (!isLoaded) {
    return (
      <Loading />
    )
  }

  return (
    <div className="min-h-screen text-foreground bg-background selection:bg-primary selection:text-primary-foreground bg-texture">
      <AnimatePresence>
        {!isOpen && (
          <InvitationCover
            coupleNames="Irfan & Rima"
            date="10.11.2024"
            onOpen={() => setIsOpen(true)}
          />
        )}
      </AnimatePresence>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <FloatingPetals />
          <Navbar />

          <main>
            <Carousel />
            <About />
            <CountdownTimer targetDate={new Date('2024-11-10T00:00:00')} />
            <EventDetails />

            <div className="container mx-auto px-4 space-y-24 py-24">
              <CommentSection />
              <PhotoGallery />
              <DonationSection />
              <BankAccounts />
            </div>
          </main>

          <Footer />
          <MusicPlayer />
        </motion.div>
      )}
    </div>
  )
}