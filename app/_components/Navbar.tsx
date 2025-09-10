"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact Us", href: "#contact-us" },
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("#home");
    const [isOpen, setIsOpen] = useState(false);

    // Scrollspy: track active section
    useEffect(() => {
        const handleScroll = () => {
            const navbarHeight = 120; // adjust based on your fixed navbar
            let currentSection = "#home";

            navItems.forEach((item) => {
                const section = document.getElementById(item.href.replace("#", ""));
                if (section) {
                    const top = section.getBoundingClientRect().top;
                    if (top <= navbarHeight + 5) { // 5px buffer
                        currentSection = item.href;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // initial call

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/60 drop-shadow-2xl border-muted">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="#home" className="flex items-center">
                    <Image
                        src="/images/logo_light.png"
                        alt="Consultancy Logo"
                        width={75}
                        height={40}
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                const section = document.getElementById(item.href.replace("#", ""));
                                if (section) {
                                    section.scrollIntoView({ behavior: "smooth" });
                                    setActiveSection(item.href); // update active immediately
                                }
                            }}
                            className={`font-medium transition-colors ${
                                activeSection === item.href
                                    ? "text-primary border-b-2 border-primary"
                                    : "text-background hover:text-primary"
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Brochure Button */}
                <div className="hidden md:block">
                    <Link
                        href="/brochure"
                        className="bg-white text-accent font-medium px-4 py-2 hover:bg-primary transition-colors"
                    >
                        Brochure
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black/20 backdrop-blur-md border-t border-muted px-6 py-4 space-y-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                const section = document.getElementById(item.href.replace("#", ""));
                                if (section) {
                                    section.scrollIntoView({ behavior: "smooth" });
                                    setActiveSection(item.href);
                                    setIsOpen(false);
                                }
                            }}
                            className={`block font-medium transition-colors ${
                                activeSection === item.href
                                    ? "text-primary"
                                    : "text-foreground hover:text-primary"
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="/brochure"
                        onClick={() => setIsOpen(false)}
                        className="block w-full text-center bg-primary text-accent font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-primary-dark transition-colors"
                    >
                        Brochure
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
