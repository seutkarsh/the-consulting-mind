"use client"

import DomeGallery from "@/components/DomeGallery";
import CircularGallery from "@/components/CircularGallery";


const Gallery= () =>{
    return (
        <section>
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-heading font-medium text-foreground mb-6 italic">
                    Gallery
                </h2>

                <div style={{ height: '600px', position: 'relative' }}>
                    <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.0} scrollEase={0.02}/>
                </div>
            </div>
        </section>
    )
}

export default Gallery;