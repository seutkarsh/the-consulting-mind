"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact Us", href: "/contact-us" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20 drop-shadow-2xl border-muted">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/images/logo_light.jpeg"
                        alt="Consultancy Logo"
                        width={75}
                        height={40}
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`font-medium transition-colors ${
                                    isActive
                                        ? "text-primary border-b-1 border-primary"
                                        : "text-background hover:text-primary"
                                }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Brochure Button (desktop) */}
                <div className="hidden md:block">
                    <Link
                        href="/brochure"
                        className="bg-white text-accent font-medium px-4 py-2  hover:bg-primary transition-colors"
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
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`block font-medium transition-colors ${
                                    isActive ? "text-primary" : "text-foreground hover:text-primary"
                                }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
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
