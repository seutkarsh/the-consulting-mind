"use client";

import Link from "next/link";

const videos = [
    { id: "6eY2TYy5ksc" },
    { id: "bn-ek0nvTR4" },
    { id: "_SR7t-symwc" },
];

const VideoSection = () => {
    return (
        <section className="section py-20 bg-background">
            <div className="section-inner max-w-6xl mx-auto px-6 text-center">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-heading font-medium text-foreground mb-10 italic text-center">
                    Watch Us in Action
                </h2>
                <p className="text-lg md:text-lg text-foreground/70 mb-20 font-light">
                    Explore our videos to see real-life strategies, training sessions, and client success stories.
                </p>

                {/* Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {videos.map((video, idx) => (
                        <div
                            key={idx}
                            className="aspect-video w-full rounded-lg overflow-hidden shadow-md"
                        >
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${video.id}`}
                                title={`YouTube video ${idx + 1}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <Link
                        href="https://www.youtube.com/@yourchannel" // <-- replace with your channel URL
                        target="_blank"
                        className="inline-flex items-center border border-primary text-primary font-light px-6 py-3 rounded-lg shadow-md hover:bg-primary hover:text-white transition-colors"
                    >
                        Visit Our YouTube Channel
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
