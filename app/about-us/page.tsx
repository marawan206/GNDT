import AboutHero from "@/components/aboutUs/hero";
import WhoWeAre from "@/components/aboutUs/whoWeAre";
import History from "@/components/aboutUs/history";
import Team from "@/components/aboutUs/team";
import Certificates from "@/components/landingPage/certificates";
import Trustworthy from "@/components/landingPage/trustworthy";
import IndustryLeaders from "@/components/landingPage/industryLeaders";
export default function Page() {
  return (
    <main className="w-full">
      <AboutHero />
      <WhoWeAre />
      <History />
      <Certificates />
      <Team />
      <Trustworthy />
      <IndustryLeaders />
    </main>
  );
}
