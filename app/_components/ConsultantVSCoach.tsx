"use client"

import Link from "next/link";
import {HiArrowRight} from "react-icons/hi";
import {FaChartBar, FaGuilded, FaHandshake} from "react-icons/fa";


const items = [
    {
        icon: <FaChartBar className="text-primary w-40 h-40 mx-auto mb-4 mt-5" />,
        title: "Business Consultant -- hands-on growth partner",
        text: [
            "Personal, practical, execution-focused support that delivers measurable business outcomes",
           " Process & systems mapping",
            "Actionable growth strategy and revenue planning",
            "SOPs, tools and ready-to-use systems",
            "Team training for performance and adoption"
        ],
    },
    {
        icon: <FaGuilded className="text-primary w-40 h-40 mx-auto mb-4 mt-5" />,
        title: "Business Coach -- mindset & leadership guide",
        text: [
            "Personal development and leadership clarity to make better decisions and stay accountable",
            "Vision & clarity coaching",
            "Habit & mindset development",
            "Accountability & performance coaching",
            "Leadership thinking and decision-support"
        ],
    }
]

const textGrid1= ["📉 Facing slow or stagnant growth?",
    "👥 Team isn’t performing well?",
    "💡 Struggling with sales/marketing clarity?",
    "🎯 Want clear, actionable strategies for growth?"]

const textGrid2= ["📍 On-Site & Virtual Business Consulting",
"⚙️ Custom Strategy + System Building",
"👥 Live Team Training Sessions",
"📊 Sales, Marketing, HR & Operations Guidance",
"🚀 Real-World Results"]

const ConsultantVSCoach = ()=>{
    return(
        <section className="section py-20 w-full bg-background">
            <div className="section-inner">
            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-heading font-medium text-foreground mb-6 italic">
                    Consultant vs Coach -- What they do and which one you need
                </h2>
                <p className="text-lg md:text-lg text-foreground/70 mb-20 font-light">
                    One steps in and fixes the business. The other guides leader&#39;s thinking.
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 ">
                    {items.map((feature, index) => (
                        <div
                            key={index}
                            className={` p-4 flex flex-col items-center text-center`}
                        >
                            {/* Icon */}
                            {feature.icon}

                            {/* Heading */}
                            <h3 className={`text-2xl font-heading font-medium mb-5`}>
                                {feature.title}
                            </h3>

                            {/* Text lines */}
                            <div className="space-y-1">
                                {feature.text.map((line, idx) => (
                                    <p key={idx} className={` text-base`}>
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <table className="w-full border mt-10 border-gray-300 overflow-hidden text-left">
                    <thead className="bg-gray-100">
                    <tr>
                        <th className="border-b border-gray-300 px-4 py-2  font-medium">Aspect</th>
                        <th className="border-b border-gray-300 px-4 py-2  font-medium">Business Consultant</th>
                        <th className="border-b border-gray-300 px-4 py-2  font-medium">Business Coach</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="odd:bg-white even:bg-gray-50">
                        <td className="border-b border-gray-300 px-4 py-2">Approach</td>
                        <td className="border-b border-gray-300 px-4 py-2">Strategic, practical, results-driven</td>
                        <td className="border-b border-gray-300 px-4 py-2">Reflective, mindset-driven</td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50">
                        <td className="border-b border-gray-300 px-4 py-2">Focus</td>
                        <td className="border-b border-gray-300 px-4 py-2">Operations, systems, execution</td>
                        <td className="border-b border-gray-300 px-4 py-2">You as the leader, clarity & mindset</td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50">
                        <td className="border-b border-gray-300 px-4 py-2">Support Style</td>
                        <td className="border-b border-gray-300 px-4 py-2">Hands-on, solution & implementation</td>
                        <td className="border-b border-gray-300 px-4 py-2">Motivational, reflective, accountability</td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50">
                        <td className="border-b border-gray-300 px-4 py-2">Best For</td>
                        <td className="border-b border-gray-300 px-4 py-2">Fixing bottlenecks & scaling operations</td>
                        <td className="border-b border-gray-300 px-4 py-2">Personal alignment & leadership growth</td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50">
                        <td className="border-b border-gray-300 px-4 py-2">Delivery</td>
                        <td className="border-b border-gray-300 px-4 py-2">Action plans, SOPs, on-site execution</td>
                        <td className="border-b border-gray-300 px-4 py-2">Coaching calls, frameworks, reflective work</td>
                    </tr>
                    </tbody>
                </table>


            </div>
            <div className="max-w-6xl mx-auto px-6">
                <h3 className="text-2xl md:text-3xl font-heading font-medium text-foreground mb-6 mt-25 italic">
                    So Which One Is Right for You?
                </h3>
                <div className="space-y-1">
                    {textGrid1.map((line, idx) => (
                        <p key={idx} className={` text-base`}>
                            {line}
                        </p>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-heading font-medium text-foreground mb-6 mt-25 italic">
                            The Consulting Mind – Business Solutions that Actually Work
                        </h3>
                        <div className="space-y-1">
                            {textGrid1.map((line, idx) => (
                                <p key={idx} className={` text-base`}>
                                    {line}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-center  mt-20 md:mt-0">
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center justify-center bg-accent text-white font-light px-6 py-3 shadow-md hover:bg-primary transition-colors"
                        >
                            TRANSFORM WITH US
                            <HiArrowRight className="ml-2 w-5 h-5"/>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default ConsultantVSCoach;