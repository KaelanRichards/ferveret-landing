import Link from "next/link";

import { Button } from "../components/button/Button";
import { HeroOneButton } from "../components/hero/HeroOneButton";
import { NavbarTwoColumns } from "../components/navigation/NavbarTwoColumns";
import { Video } from "../components/video/Video";
import { Section } from "../layout/Section";
import { Logo } from "./Logo";

const Hero = () => (
  <div color="bg-gray-200">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <div />
      </NavbarTwoColumns>
    </Section>

    <div className="grid grid-cols-2">
      <div className="p-20">
        <HeroOneButton
          title={<>The most advanced and sustainable data center ever made.</>}
          description="Enabling the most advanced, efficient, cost-competitive
          and sustainable data center ever made."
          button={
            <Link href="">
              <Button>Learn More</Button>
            </Link>
          }
        />
      </div>

      <div className="bg-black">
        <Video autoPlay src="/assets/videos/Landing_page_video.mp4" />
      </div>
    </div>
  </div>
);

export { Hero };
