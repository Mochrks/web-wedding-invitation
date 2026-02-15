import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock } from 'lucide-react'
import { LocationMap } from './LocationMap'

const events = [
    {
        id: 1,
        title: 'Akad Nikah',
        date: 'Minggu, 10 November 2024',
        time: '08:00 - 10:00 WIB',
        venue: 'Gedung Serbaguna Jakarta',
        address: 'Jl. Merdeka No. 1, Jakarta Pusat',
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.24151703666!2d106.759478!3d-6.2297465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e1b0000001%3A0x7d020d58616a241!2sJakarta%20Pusat%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
    },
    {
        id: 2,
        title: 'Resepsi Pernikahan',
        date: 'Minggu, 10 November 2024',
        time: '11:00 - 13:00 WIB',
        venue: 'Gedung Serbaguna Jakarta',
        address: 'Jl. Merdeka No. 1, Jakarta Pusat',
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.24151703666!2d106.759478!3d-6.2297465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e1b0000001%3A0x7d020d58616a241!2sJakarta%20Pusat%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
    }
]

export function EventDetails() {
    return (
        <section id="event" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl font-calligraphy mb-4">Save the Date</h2>
                    <div className="w-12 h-[1px] bg-primary/20 mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="bg-background p-12 border border-primary/5 shadow-sm hover:border-primary/20 transition-all duration-700 relative group overflow-hidden"
                        >
                            {/* Decorative Background Icon */}
                            <div className="absolute top-0 right-0 p-8 transform translate-x-1/2 -translate-y-1/2 opacity-[0.03] group-hover:scale-110 transition-transform duration-1000">
                                {event.id === 1 ? <Calendar className="w-64 h-64" /> : <MapPin className="w-64 h-64" />}
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-5xl font-calligraphy mb-12 text-primary/80">{event.title}</h3>

                                <div className="space-y-8 mb-12">
                                    <div className="flex items-start space-x-6">
                                        <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                                            <Calendar className="w-4 h-4 text-primary/60" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Date</p>
                                            <p className="text-xl font-light tracking-wide">{event.date}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-6">
                                        <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-4 h-4 text-primary/60" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Time</p>
                                            <p className="text-xl font-light tracking-wide">{event.time}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-6">
                                        <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-4 h-4 text-primary/60" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Venue</p>
                                            <p className="text-xl font-light tracking-wide mb-2">{event.venue}</p>
                                            <p className="text-xs text-muted-foreground font-light leading-relaxed">{event.address}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="h-[250px] w-full grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 border border-primary/5 overflow-hidden">
                                    <LocationMap mapSrc={event.mapSrc} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
