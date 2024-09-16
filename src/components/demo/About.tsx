export function About() {
    return (
        <section id="about" className="py-12 font-primary">
            <h2 className="text-4xl font-bold text-center mb-2">Our Story</h2>
            <div className="flex justify-center mb-8">
                {/* You can add your decorative element here if needed */}
            </div>
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="flex flex-col items-center">
                    <div className="relative w-64 h-64">
                        <div className="w-full h-full rounded-full overflow-hidden">
                            <img
                                src="https://weddingmarket.com/storage/images/artikelidea/719c38dc6bdcd6ca471d19c1b1ee1223edcdf245.webp"
                                alt="Groom"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="49" fill="none" stroke="currentColor" strokeWidth="1" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-secondary mt-4">John</h3>
                </div>
                <div className="text-center font-tertiary">
                    <p className="mb-4">
                        John and Jane's love story began five years ago when they met at a local coffee shop.
                        What started as a chance encounter over spilled lattes turned into a beautiful friendship,
                        and eventually blossomed into love.
                    </p>
                    <p className="mb-4">
                        Through the ups and downs of life, they've stood by each other, growing stronger together.
                        Now, they're ready to take the next step in their journey and commit to a lifetime of love and adventure.
                    </p>
                    <p>
                        Join us in celebrating their union and the beginning of their new chapter together!
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="relative w-64 h-64">
                        <div className="w-full h-full rounded-full overflow-hidden">
                            <img
                                src="https://png.pngtree.com/thumb_back/fw800/background/20230320/pngtree-preparing-the-bride-putting-on-the-wedding-dress-photo-image_49690244.jpg"
                                alt="Bride"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="49" fill="none" stroke="currentColor" strokeWidth="1" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-secondary mt-4">Jane</h3>
                </div>
            </div>
        </section>
    )
}