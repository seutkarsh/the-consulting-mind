"use client";

import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const StickyCTA = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full z-50">
            <div className="relative flex items-center justify-between bg-gradient-to-r backdrop-blur-md from-white to-black/80 text-white px-4 lg:px-20 py-3 shadow-lg">

                {/* Phone Icon (left) */}
                <a
                    href="tel:+91-9828140012"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white animate-bounce"
                >
                    <FaPhoneAlt size={20} />
                </a>

                {/* Center CTA */}
                <Link
                    href="/contact-us"
                    className="px-6 py-3 bg-white text-accent font-medium shadow-md animate-pulse hover:bg-primary  hover:animate-none hover:text-white transition-colors "
                >
                    REGISTER NOW
                </Link>

                {/* WhatsApp Icon (right) */}
                <a
                    href="https://wa.me/919587488012"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white animate-bounce"
                    style={{ animationDuration: "2s" }}
                >
                    <FaWhatsapp size={22} />
                </a>
            </div>
        </div>
    );
};

export default StickyCTA;
