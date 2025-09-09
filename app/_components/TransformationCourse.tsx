"use client"

const skills = [
 "✔️ Daily Affirmations",
    "✔️ Power of Gratitude",
    "✔️ Vision Board & Visualization",
    "✔️ Detoxing from Toxic Environments",
    "✔️ Financial Awareness & Investment Habits",
    "✔️ Mental Clarity and Confidence",
    "✔️ Morning & Night Routines for Success"
]

const TransformationCourse = () =>{
    return(
        <section>
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-heading font-medium text-foreground mb-2 italic">
                    Life Transformation Course
                </h2>
                <h3 className="text-2xl md:text-3xl font-heading font-medium text-primary mb-6">
                   Upgrade Your Mindset, Upgrade Your Life
                </h3>
                <p className="text-lg md:text-lg text-foreground/70 mb-10 font-light">
                    A course that guides you step-by-step to strengthen your mindset, cultivate inner peace, and attract abundance — even in the midst of life’s chaos.
                </p>
                <h3 className="text-2xl md:text-3xl font-heading font-medium text-accent mb-6">
                    Skills & Practices You&#39;ll Master
                </h3>
                <div className=" flex flex-row flex-wrap justify-center items-center gap-5">
                    {skills.map((line, idx) => (
                        <p key={idx} className={` text-base`}>
                            {line}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TransformationCourse;