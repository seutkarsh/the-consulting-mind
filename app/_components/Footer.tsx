"use client";

import Link from "next/link";
import Image from "next/image";
import {
    FaInstagram,
    FaYoutube,
    FaLinkedin,
    FaFacebook,
    FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-accent-dark text-white py-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Logo & Description */}
                <div className="space-y-4">
                    <Link href="/">
                        <Image
                            src="/images/logo_light.png"
                            alt="Logo"
                            width={160}
                            height={50}
                            className="object-contain"
                        />
                    </Link>
                    <p className="text-sm text-white/80">
                        We help businesses transform, scale, and empower their teams while
                        inspiring personal growth and mindset evolution.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/" className="hover:text-primary transition-colors">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-primary transition-colors">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:text-primary transition-colors">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/gallery" className="hover:text-primary transition-colors">
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact-us" className="hover:text-primary transition-colors">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Details */}
                <div>
                    <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
                    <ul className="space-y-2 text-sm text-white/80">
                        <li>Email: <a href="mailto:info@theconsultingmind.in" className="hover:text-primary transition-colors">info@theconsultingmind.in</a></li>
                        <li>Phone: <a href="tel:+91-9828140012" className="hover:text-primary transition-colors">+91-9828140012</a></li>
                        <li>Address: 61/17, Heera Path, Rajat Path, Mansarovar, Jaipur, Rajasthan, India - 302020</li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h4 className="font-heading font-semibold text-lg mb-4">Follow Us</h4>
                    <div className="flex space-x-4 text-xl">
                        <a href="https://www.instagram.com/theconsultingmindby_abhishek/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                            <FaInstagram />
                        </a>
                        <a href="https://www.youtube.com/@theconsultingmind" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                            <FaYoutube />
                        </a>
                        <a href="https://www.linkedin.com/in/abhishek-sharma-403580181" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.facebook.com/people/The-Consulting-Mind-By-Abhishek/61578001594083/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                            <FaFacebook />
                        </a>
                        <a href="https://www.whatsapp.com/channel/0029Vb6FSWdBA1f6QgIxkf18" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom copyright */}
            <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-white/60">
                © {new Date().getFullYear()} Business Source Consultants. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
