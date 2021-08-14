import React from "react";

import Link from "next/link";

import { Background } from "../components/background/Background";
import { FooterCopyright } from "../components/footer/FooterCopyright";
import { Logo } from "../components/logo/Logo";
import { Section } from "../layout/Section";

const Footer = () => (
  <Background color="bg-primary-1100">
    <Section>
      <div className="text-center">
        <div className="w-1/2">
          <Logo />
        </div>
        <nav>
          <ul className="navbar mt-5 flex flex-row justify-center font-medium text-xl text-gray-800">
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
          </ul>
        </nav>

        <div className="mt-8 text-sm">
          <FooterCopyright />
        </div>

        <style jsx>
          {`
            .navbar :global(li) {
              @apply mx-4;
            }
          `}
        </style>
      </div>
    </Section>
  </Background>
);

export { Footer };
