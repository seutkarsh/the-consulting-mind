"use client";

import {FaRegLightbulb, FaChartLine, FaUsers, FaHandshake, FaDesktop, FaBuilding} from "react-icons/fa";
import Link from "next/link";
import {HiArrowRight} from "react-icons/hi";

const features = [
    {
        icon: <FaHandshake className="text-primary w-15 h-15 mx-auto mb-4 mt-5" />,
        title: "1-to-1 Business Consulting",
        subtitle: "Personalized sessions for business owners and decision-makers",
        text: [
            "Business Systems Setup",
            "Process & Workflow Design",
            "Revenue Mapping",
        ],
        bg: "bg-[#03002b]", // dark
        textColor: "text-white",
    },
    {
        icon: <FaDesktop className="text-primary w-15 h-15 mx-auto mb-4  mt-5" />,
        title: "Live Team Trainings",
        subtitle: "Energetic & customized training for Sales, Service, Admin & HR",
        text: [
            "Skill Development",
            "Performance Boost",
            "Mindset Shift",
        ],
        bg: "bg-white", // light
        textColor: "text-foreground",
    },
    {
        icon: <FaBuilding className="text-primary w-15 h-15 mx-auto mb-4 mt-5" />,
        title: "On-Site Business Consulting",
        subtitle: "hands-on consulting at your business location",
        text: [
            "Operational Optimization",
            "Execution Support",
            "Scalability Planning",
        ],
        bg: "bg-[#1c1a45]", // different dark shade
        textColor: "text-white",
    },
];

const moreFeatures = [
    "SOP Creation","Hiring Support", "KPI & KRA Development","Sales Funnel Optimization",'Team Engagement Systems','Marketing Strategy Optimization']
const FeaturesSection = () => {
    return (
        <section id="services" className="section section-bg-alt py-20 w-full bg-background">
            <div className="section-inner max-w-6xl mx-auto px-6 text-center">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-heading font-medium text-foreground mb-6 italic">
                    Comprehensive Solutions Tailored for Your Business
                </h2>
                <p className="text-lg md:text-lg text-foreground/70 mb-20 font-light">
                    End-to-end consulting and training support designed to help businesses grow efficiently and sustainably
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`${feature.bg} p-4 flex flex-col items-center text-center`}
                        >
                            {/* Icon */}
                            {feature.icon}

                            {/* Heading */}
                            <h3 className={`text-2xl font-heading font-medium mb-2 ${feature.textColor}`}>
                                {feature.title}
                            </h3>

                            {/* Italic Subheading */}
                            <p className={`italic mb-6 ${feature.textColor}`}>{feature.subtitle}</p>

                            {/* Divider */}
                            <div className={`w-24 h-0.5 bg-primary mb-3`} />

                            {/* Text lines */}
                            <div className="space-y-1">
                                {feature.text.map((line, idx) => (
                                    <p key={idx} className={`${feature.textColor} text-base`}>
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-medium text-foreground mb-6 mt-25 italic">
                    More Ways We Help
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-15">
                    {
                        moreFeatures.map((feature, index) => (
                            <span
                                key={index}
                                className="inline-block bg-white/90 text-foreground font-heading font-medium px-4 py-2 rounded-lg shadow-md border border-gray-200"
                            >
  {feature}
</span>

                        ))
                    }

                </div>
                {/* CTA */}
                <div className="mt-20">
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center bg-accent text-white font-light px-6 py-3 shadow-md hover:bg-primary transition-colors"
                    >
                        BEGIN YOUR JOURNEY
                        <HiArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </div>

        </section>
    );
};

export default FeaturesSection;
