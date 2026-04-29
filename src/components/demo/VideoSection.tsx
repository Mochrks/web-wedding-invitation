import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PlayIcon } from "lucide-react"; // Play icon untuk thumbnail

export function VideoSection() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="py-12">
            <h2 className="text-3xl font-bold text-center mb-6">Our Story</h2>
            <div className="flex justify-center ">
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    {/* Trigger modal dengan thumbnail */}
                    <DialogTrigger asChild>
                        <div
                            className="relative cursor-pointer group"
                            onClick={() => setIsOpen(true)}
                        >
                            <img
                                src="https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg" // Thumbnail dari YouTube video
                                alt="Our Story Thumbnail"
                                loading="lazy"
                                className="rounded-lg shadow-lg"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <PlayIcon className="w-16 h-16 text-white" />
                            </div>
                        </div>
                    </DialogTrigger >

                    <DialogContent className="bg-white p-0 rounded-lg shadow-lg" >
                        <div className="aspect-w-16 aspect-h-10">
                            <iframe
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="YouTube video"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                className="w-full h-full rounded-lg"
                            ></iframe>
                        </div>
                    </DialogContent>
                </Dialog >
            </div >
        </section >
    );
}
