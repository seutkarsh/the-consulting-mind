"use client"

import {AnimatedTestimonials} from "@/components/ui/animated-testimonials";

const testimonials = [
    {
        quote:
            "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
        name: "Sarah Chen",
        designation: "Product Manager at TechFlow",
        src: "/images/gallery/5.jpg",
    },
    {
        quote:
            "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
        name: "Michael Rodriguez",
        designation: "CTO at InnovateSphere",
        src: "/images/gallery/4.jpg",
    },
    {
        quote:
            "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
        name: "Emily Watson",
        designation: "Operations Director at CloudScale",
        src: "/images/gallery/3.jpg",
    },
    {
        quote:
            "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
        name: "James Kim",
        designation: "Engineering Lead at DataPro",
        src: "/images/gallery/2.jpg",
    },
    {
        quote:
            "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
        name: "Lisa Thompson",
        designation: "VP of Technology at FutureNet",
        src: "/images/gallery/1.jpg",
    },
];
const Testimonials = () =>{


    return(
        <section className="section section-bg-alt">
            <div className="section-inner max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-heading font-medium text-foreground mb-6 italic">
                    Success Speaks
                </h2>
                <p className="text-lg md:text-lg text-foreground/70 mb-20 font-light">
                    Hear is how we have helped businesses grow and leaders transform
                </p>

                <AnimatedTestimonials testimonials={testimonials} />
            </div>
        </section>
    )
}

export default Testimonials;