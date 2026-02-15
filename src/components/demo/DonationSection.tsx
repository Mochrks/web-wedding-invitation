import { QRCodeSVG } from 'qrcode.react'
import { motion } from 'framer-motion'

export function DonationSection() {
    const qrisData = "00020101021226660014ID.LINKAJA.WWW011893600911002103554602150000000000000005204599953033605802ID5911MOCH RIZKI 6013KAB. BANDUNG 61054021262070703A016304CA30" // Example QRIS data

    return (
        <section id="donate" className="py-24 bg-background">
            <div className="container mx-auto px-4 max-w-lg text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-4xl italic mb-6">Wedding Gift</h2>
                    <p className="text-sm font-light text-muted-foreground leading-relaxed mb-12">
                        Your presence is the greatest gift of all. However, if you'd like to support our new journey,
                        we've provided a way for you to do so.
                    </p>

                    <div className="relative inline-block p-8 border border-primary/5 shadow-sm group">
                        <div className="absolute inset-0 border border-primary/10 -m-2 -z-10 group-hover:m-0 transition-all duration-700"></div>
                        <QRCodeSVG value={qrisData} size={200} className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" />
                    </div>

                    <p className="mt-12 text-[10px] uppercase tracking-[0.3em] font-light text-muted-foreground">
                        Scan with any banking or e-wallet app
                    </p>
                </motion.div>
            </div>
        </section>
    )
}