import { Link } from "react-router-dom";

import ProCard from "./ProCard";

import heroImage1 from "/assets/images/heroImage1.png";
import heroImage2 from "/assets/images/heroImage2.png";
import heroImage3 from "/assets/images/heroImage3.png";
import heroImage4 from "/assets/images/heroImage4.png";

const HeroSection = () => {
  return (
    <section className="min-h-[100dvh] max-w-[100vw] bg-hero-bg bg-cover bg-no-repeat">
      <div className="hero-gradient min-h-[100dvh] pb-[5em] pt-[13em] text-white backdrop-grayscale">
        <h1 className="px-[0.5em] text-[5em] font-bold leading-[1em] md:px-[1em] md:text-[7.2em]">
          Get schooled
        </h1>
        <div className="align-center mb-[2.5em] flex justify-center gap-[3.5em] text-[0.95em] tracking-[0.08em]">
          <span>SMILES</span>
          <span>GRIN</span>
          <span>LAUGH</span>
        </div>
        <Link to="/" className="btn">
          REGISTER FOR FREE
        </Link>
        <p className="mb-[2.5em] mt-[5em] text-[1.85em] font-[100]">
          <span className="font-[700] text-purple">Learn</span> from the pros
        </p>
        <div className="m-auto flex max-w-[65em] flex-wrap items-center justify-center gap-[6.5em] gap-y-[3em] px-[3em]">
          <ProCard
            image={heroImage1}
            name="Phillip Massey"
            description="« Smile of the year » 2018 - 2019"
          />
          <ProCard
            image={heroImage2}
            name="Nannie Lawrence"
            description="Best « little smile » 2017"
          />
          <ProCard
            image={heroImage3}
            name="Bruce Walters"
            description="Best « Friend Smile » live performance 2019"
          />
          <ProCard
            image={heroImage4}
            name="Henry Hughes"
            description="« 24h smiles » winner 2016 - 2019"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
