import Link from "next/link";

import { Background } from "../components/background/Background";
import { CenteredFooter } from "../components/footer/CenteredFooter";
import { Logo } from "../components/logo/Logo";
import { Section } from "../layout/Section";

const Footer = () => (
  <Background color="bg-primary-1100">
    <Section>
      <CenteredFooter logo={<Logo />} iconList={<></>}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/solution">
            <a>About</a>
          </Link>
        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
