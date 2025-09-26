"use client"

import {AnimatedTestimonials} from "@/components/ui/animated-testimonials";

const testimonials = [
    {
        quote:
            "Boosted our productivity by 30%”\n" +
            "\"Before workin with Abhishek, our operations in tiles manufacturing were scattered and unorganized. His consulting helped us streamline production, build a stronger sales funnel, and improve employee accountability. Today, our productivity has increased by more than 30%. His practical approach and deep understanding of SMEs make him a true growth partner.",
        name: "Umashankar Sharma",
        designation: "CEO at Home Square LLP (Patna, Bihar)",
        src: "/images/testimonials/home_square_llp.png",
    },
    {
        quote:
            "Made our dealership the most professional in the region”\n" +
            "\"Running a tractor dealership requires constant coordination between sales, service, and customers. Abhishek gave us structured KPIs, employee training modules, and customer engagement strategies. Within months, our team became more focused, sales conversion improved, and our dealership is now seen as the most professional in the region. Truly grateful for his guidance.",
        name: "Pankaj Sood",
        designation: "CEO at Sood Automobiles (UP)",
        src: "/images/testimonials/sood.jpeg",
    },
    {
        quote:
            "From chasing growth to creating growth systems”\n" +
            "\"In the manufacturing and CNC tools business, competition is tough and margins are thin. Abhishek helped us build systems for HR, sales, and team retention. His on-site consulting changed how my managers lead and how my employees take responsibility. We no longer chase growth — we have a system that brings growth to us.",
        name: "Manish Oberoi",
        designation: "CEO at SM Enterprises & Perfect Porta Cabin (Faridabad)",
        src: "/images/testimonials/perfect_porta_cabin.jpeg",
    },
    {
        quote:
            "From passion-driven to professionally managed”\n" +
            "\"I started my Gujarati dhokla restaurant with passion but struggled in managing staff and daily operations. Abhishek brought clarity, trained my team, and showed us how to run the restaurant professionally. Today, our customer experience is far better, and profits have increased steadily. For small business owners like me, his consulting is a blessing.",
        name: "Balvant Mistry",
        designation: "CEO at Hare Rama Hare Krishna Restaurant (Chikali, Gujarat)",
        src: "/images/testimonials/hare_krishna.jpeg",
    },
    {
        quote:
            "Built trust and scalability in my business”\n" +
            "\"In IT and electrical solutions, client trust and team performance are everything. Abhishek helped us design a clear HR policy, train our workforce, and set up a professional management structure. His insights into people and processes have made my company more reliable and scalable. I now feel confident to take bigger projects without stress.",
        name: "Sikandar Yadav",
        designation: "CEO at IT Security India (Gurgaon)",
        src: "/images/gallery/1.jpg",
    },
    {
        quote:
            "Improved efficiency and transformed employee mindset”\n" +
        "\"In the garment industry, deadlines and discipline decide success. The Consulting Mind with Abhishek worked with us on streamlining departments, improving team motivation, and setting up systems to reduce delays. His consulting not only improved our efficiency but also uplifted the mindset of my employees. He is not just a consultant, but a true transformation partner.",
        name: "Prem Aggarwal",
        designation: "CEO at Garment Mantra Lifestyle Ltd. (Tirupur)",
        src: "/images/testimonials/garment_mantra_logo.jpeg",
    },
];
const Testimonials = () =>{


    return(
        <section className="section section-bg-alt">
            <div className="section-inner max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-heading font-medium text-foreground mb-6 italic">
                    Success Speaks
                </h2>
                <p className="text-lg md:text-lg text-foreground/70 mb-20 font-light">
                    Hear is how we have helped businesses grow and leaders transform
                </p>

                <AnimatedTestimonials testimonials={testimonials} />
            </div>
        </section>
    )
}

export default Testimonials;