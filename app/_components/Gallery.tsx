"use client"

import DomeGallery from "@/components/DomeGallery";
import CircularGallery from "@/components/CircularGallery";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Image from "next/image";


const images = [
    "/images/gallery/1.jpg",
    "/images/gallery/2.jpg",
    "/images/gallery/3.1.jpg",
    "/images/gallery/4.jpg",
    "/images/gallery/5.jpg",
    "/images/gallery/6.jpg",
    "/images/gallery/7.jpg",
    "/images/gallery/8.jpg",
    "/images/gallery/9.png",
]

const Gallery= () =>{
    return (
        <section id="gallery" className="section section-bg-alt ">
            <div className="section-inner mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-heading font-medium text-foreground mb-6 italic">
                    Moments That Inspire
                </h2>
                <p className="text-lg md:text-lg text-foreground/70 mb-20 font-light">
                    Snapshots from seminars, workshops, and awards capturing milestones and achievements.
                </p>


                <div style={{  position: 'relative' }}>
                    <Carousel opts={{
                        align: "start",
                        loop: true,
                    }}>
                        <CarouselContent >
                            {images.map((image, i) => (
                                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3 relative h-80 mx-2">
                                    <Image
                                        src={image}
                                        alt={image.toString()}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default Gallery;