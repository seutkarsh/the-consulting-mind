"use client";

import Image from "next/image";

const experts = [
    {
        name: "Abhishek Sharma",
        role: "Founder",
        description:
            "I’m Abhishek Sharma — a Business Consultant, Trainer, and Transformation Coach on a mission to simplify business, empower teams, and inspire personal growth. I had the privilege of working as a Senior Business Consultant alongside India’s leading business coach, Mr. Rahul Malodia, where I served as a trusted second line, managing live consulting, training, and high-impact strategic initiatives.\n" +
            "\n" +
            "I help businesses scale operations, build resilient teams, and implement systems that run seamlessly even in your absence. Beyond business, I offer a Life Transformation Course designed to enhance mindset, cultivate gratitude, clarify vision, and drive personal growth.\n" +
            "\n" +
            "Whether your goal is business success or inner transformation, I’m here to guide you every step of the way.",
        image: "/images/abhishek.jpg",
    },
    {
        name: "Amit Tiwari",
        role: "Co-Founder",
        description:
            "I’m Amit Tiwari — a Business Consultant and Trainer with a mission to simplify business, empower teams, and inspire personal growth. I had the privilege of working as a Senior Business Consultant with India’s leading business coach, Mr. Rahul Malodia, where I served as a trusted second line, managing live consulting, training, and high-impact strategic implementations.\n" +
            "\n" +
            "Over the years, I’ve worked across Production, Trading, Manufacturing, Garments, and Shipping, providing consulting and management support both in India and internationally. I specialize in helping businesses scale operations, build resilient teams, and implement systems that run seamlessly even in the owner’s absence.\n" +
            "\n" +
            "Beyond business growth, I conduct a Life Transformation Course focused on mindset, gratitude, vision-building, and clarity, helping individuals achieve a balance between professional success and personal fulfillment.\n" +
            "\n" +
            "Whether your goal is accelerating business growth or unlocking inner transformation, I’m here to guide you every step of the way.",
        image: "/images/amit.jpg",
    },
];
const MeetExperts = () => {
    return (
        <section id="about" className="section w-full py-20 bg-background">
            <div className="section-inner max-w-6xl mx-auto px-6">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl italic font-heading font-medium text-foreground mb-16 text-left">
                    Meet Our Experts
                </h2>

                {/* Profiles */}
                {experts.map((expert, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row items-start mb-40 gap-20 ${
                                !isEven ? "md:flex-row-reverse" : ""
                            }`}
                        >
                            {/* Image */}
                            <div className="relative w-full md:w-1/2 flex-shrink-0">
                                <div className="relative h-full">
                                    <Image
                                        src={expert.image}
                                        alt={expert.name}
                                        width={500}
                                        height={500}
                                        className="object-cover w-full h-full  shadow-[-50px_50px_0px_0px_rgba(0,0,0,0.15)]"
                                    />
                                </div>
                            </div>

                            {/* Text */}
                            <div className="md:w-1/2 text-left">
                                <h3 className="text-2xl md:text-3xl font-heading font-medium text-foreground mb-4">
                                    {expert.name}
                                </h3>
                                <p className="text-primary font-semibold mb-4">{expert.role}</p>
                                <p className="text-foreground text-base md:text-lg leading-relaxed whitespace-pre-line">
                                    {expert.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default MeetExperts;