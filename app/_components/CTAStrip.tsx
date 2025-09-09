"use client";

import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

const CtaStrip = () => {
    return (
        <section className="w-full bg-gradient-to-r from-primary to-primary-dark py-6">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                {/* Text */}
                <p className="text-white text-center md:text-left text-lg md:text-xl lg:text-2xl font-medium">
                    Take the first step toward success - join our life-changing course today!
                </p>

                {/* Button */}
                <Link
                    href="/contact-us"
                    className="mt-4 md:mt-0 inline-flex items-center border-2 border-white text-white font-light px-6 py-3 rounded hover:bg-white hover:text-primary transition-colors"
                >
                    Enroll Now
                    <HiArrowRight className="ml-2 w-5 h-5" />
                </Link>
            </div>
        </section>
    );
};

export default CtaStrip;
