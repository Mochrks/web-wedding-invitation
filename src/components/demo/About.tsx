import { motion } from 'framer-motion'
import { irfan, is } from '@/assets'

export function About() {
    return (
        <section id="couple" className="py-24 bg-background relative overflow-hidden">
            {/* Romantic Quote Decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-texture opacity-30 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center mb-24"
                >
                    <p className="font-calligraphy text-4xl md:text-5xl text-primary mb-6">You are my today and all of my tomorrows</p>
                    <div className="w-12 h-[1px] bg-primary/20 mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center max-w-5xl mx-auto">
                    {/* Groom */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="flex flex-col items-center text-center space-y-8"
                    >
                        <div className="relative group">
                            <div className="absolute inset-0 border border-primary/10 -m-4 group-hover:m-0 transition-all duration-700" />
                            <div className="w-64 h-80 overflow-hidden relative">
                                <img
                                    src={irfan}
                                    alt="Groom"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-110"
                                />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-5xl font-calligraphy mb-2">Irfan Maolana</h3>
                            <p className="text-xs uppercase tracking-[0.3em] font-light text-muted-foreground mb-4">The Groom</p>
                            <p className="text-sm font-light text-muted-foreground leading-relaxed max-w-xs">
                                Son of Mr. X <br /> & Mrs. Y
                            </p>
                        </div>
                    </motion.div>

                    {/* Bride */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="flex flex-col items-center text-center space-y-8"
                    >
                        <div className="relative group">
                            <div className="absolute inset-0 border border-primary/10 -m-4 group-hover:m-0 transition-all duration-700" />
                            <div className="w-64 h-80 overflow-hidden relative">
                                <img
                                    src={is}
                                    alt="Bride"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-110"
                                />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-5xl font-calligraphy mb-2">Rima Sefrina</h3>
                            <p className="text-xs uppercase tracking-[0.3em] font-light text-muted-foreground mb-4">The Bride</p>
                            <p className="text-sm font-light text-muted-foreground leading-relaxed max-w-xs">
                                Daughter of Mr. A <br /> & Mrs. B
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
