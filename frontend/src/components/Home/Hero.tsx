import * as React from "react";
import poppins from "@/fonts/Poppins";
import { twMerge } from "tailwind-merge";
import { TRANSLATION } from "@/constants/translation";
import Image from "next/image";
import { LoginButton } from "../AuthButton";
import manrope from "@/fonts/Manrope";
interface IHeroSectionProps {}

const HeroSection: React.FunctionComponent<IHeroSectionProps> = (props) => {
  return (
    <div
      className={twMerge(
        poppins.className,
        "flex flex-col items-center justify-center pt-28",
      )}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className={"text-5xl font-bold text-text-primary"}>
          {TRANSLATION.hero_primary}
        </h1>
        <p className={"mt-4 w-2/5 text-text-muted "}>
          {TRANSLATION.hero_secondary}
        </p>
        <LoginButton className="mt-5">Get Started</LoginButton>
      </div>
      <Image
        src="/assets/images/earth.png"
        alt="Hero Image"
        width={2560}
        height={1638}
        className="scale-90"
      />
    </div>
  );
};

export default HeroSection;
