import HeroSection from "@/app/_components/HeroSection";
import CTAStrip from "@/app/_components/CTAStrip";
import TeamProfiles from "@/app/_components/TeamProfiles";
import Features from "@/app/_components/Features";
import ConsultantVSCoach from "@/app/_components/ConsultantVSCoach";
import Testimonials from "@/app/_components/Testimonials";
import TransformationCourse from "@/app/_components/TransformationCourse";
import Gallery from "@/app/_components/Gallery";
import VideoSection from "@/app/_components/VideoSection";
import ContactForm from "@/app/_components/ContactForm";

export default function Home() {
  return (
      <>
      <HeroSection/>
          <CTAStrip/>
          <TeamProfiles/>
          <Features/>
          <ConsultantVSCoach/>
          <Testimonials/>
          <TransformationCourse/>
          <Gallery/>
          <VideoSection/>
          <ContactForm/>
      </>
  );
}
