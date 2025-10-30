import Hero from "@/components/landingPage/hero";
import WelcomeSection from "@/components/landingPage/welcomeSection";
import Services from "@/components/landingPage/services";
import Certificates from "@/components/landingPage/certificates";
import Partners from "@/components/landingPage/partners";
import Trustworthy from "@/components/landingPage/trustworthy";
import IndustryLeaders from "@/components/landingPage/industryLeaders";
import ClientStories from "@/components/landingPage/clientStories";
import Blogs from "@/components/landingPage/blogs";
export default function Home() {
  return (
    <div>
      <Hero />
      <WelcomeSection />
      <Services />
      <Partners />
      <Trustworthy />
      <Certificates />
      <IndustryLeaders />
      <ClientStories />
      <Blogs />
    </div>
  );
}
