"use client";

import { useState } from "react";
import { HiArrowRight } from "react-icons/hi";

interface FormData {
    name: string;
    email: string;
    business: string;
    phone: string;
    message: string;
}

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        business: "",
        phone: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setSuccess(false);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                setSuccess(true);
                setFormData({ name: "", email: "", business: "", phone: "", message: "" });
            } else {
                setError(true);
            }
        } catch (err) {
            console.error(err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact-us" className=" section section-bg-alt mx-auto px-6 py-16">
            <div className=" max-w-4xl mx-auto text-center">


            <h2 className="text-4xl font-heading font-medium text-foreground mb-8 text-center italic">
                Get In Touch
            </h2>
                <p className="text-lg md:text-lg text-foreground/70 mb-20 font-light">
                    Have questions or ready to start your transformation journey? Reach out to us today
                </p>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                />
                <input
                    type="text"
                    name="business"
                    placeholder="Business Name"
                    value={formData.business}
                    onChange={handleChange}
                    className="input-field"
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="input-field h-32 resize-none"
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center bg-primary text-accent font-semibold px-6 py-3 shadow-md hover:bg-primary-dark transition-colors"
                >
                    {loading ? "Sending..." : "Send Message"}
                    <HiArrowRight className="ml-2 w-5 h-5" />
                </button>

                {success && (
                    <p className="text-green-600 font-medium text-center mt-2">
                        Your message has been sent successfully!
                    </p>
                )}
                {error && (
                    <p className="text-red-600 font-medium text-center mt-2">
                        Something went wrong. Please try again.
                    </p>
                )}
            </form>
            </div>
        </section>
    );
};

export default ContactForm;
