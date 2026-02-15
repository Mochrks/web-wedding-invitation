export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground py-24 px-4 overflow-hidden">
            <div className="container mx-auto max-w-4xl text-center">
                <h3 className="text-5xl italic font-serif mb-6 tracking-tighter">Irfan & Rima</h3>
                <p className="text-sm uppercase tracking-[0.4em] font-light mb-12 opacity-70">Forever & Always</p>

                <div className="w-12 h-[1px] bg-primary-foreground/20 mx-auto mb-12"></div>

                <div className="space-y-4 text-[10px] uppercase tracking-[0.2em] font-light opacity-50">
                    <p>&copy; 2024 The Wedding Of Irfan & Rima</p>
                    <p>
                        Handcrafted with passion by
                        <a
                            href="https://github.com/mochrks"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 border-b border-transparent hover:border-primary-foreground/50 transition-all duration-500"
                        >
                            @mochrks
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}