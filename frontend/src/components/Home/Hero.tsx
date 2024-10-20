import * as React from "react";
import poppins from "@/fonts/Poppins";
import { twMerge } from "tailwind-merge";
import { TRANSLATION } from "@/constants/translation";
import Image from "next/image";

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
        <p className={"text-text-muted mt-4 w-1/3 "}>
          {TRANSLATION.hero_secondary}
        </p>
      </div>
      <img
        src="/assets/images/earth.png"
        alt="Hero Image"
        className=" scale-90"
      />
    </div>
  );
};

export default HeroSection;
