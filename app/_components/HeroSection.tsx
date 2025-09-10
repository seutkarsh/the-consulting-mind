"use client";

import Link from "next/link";
import TextType from "@/components/TextType";
import {HiArrowRight} from "react-icons/hi";

const Hero = () => {
    return (
        <section id="home" className="section relative h-screen w-full flex items-center justify-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/hero_section_bg.jpg')" }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="section-inner relative z-10 text-center max-w-5xl px-6">
                {/* Heading with typing animation */}
                <h1 className="font-heading italic text-6xl md:text-7xl lg:text-8xl font-medium text-white leading-tight">
                    <TextType
                        text={["Transform Your Business", "Elevate Your Mindset"]}
                        typingSpeed={80}
                        deletingSpeed={50}
                        loop
                    />
                </h1>

                {/* Subheading */}
                <p className="mt-15 text-lg md:text-xl lg:text-2xl text-white/90">
                    Result-driven Business Consulting | Team Trainings | Life Transformation Courses
                </p>

                {/* CTA */}
                <div className="mt-20">
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center bg-white text-accent font-light px-6 py-3 shadow-md hover:bg-primary transition-colors"
                    >
                        BOOK FREE STRATEGY CALL
                        <HiArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
