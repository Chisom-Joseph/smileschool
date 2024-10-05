import { Link } from "react-router-dom";

import ProCard from "./ProCard";

import heroImage1 from "/assets/images/heroImage1.png";
import heroImage2 from "/assets/images/heroImage2.png";
import heroImage3 from "/assets/images/heroImage3.png";
import heroImage4 from "/assets/images/heroImage4.png";

const HeroSection = () => {
  return (
    <section className="bg-hero-bg bg-cover bg-no-repeat min-h-[100dvh]">
      <div className="min-h-[100dvh] text-white pt-[13em] pb-[5em] backdrop-grayscale hero-gradient">
        <h1 className="font-bold text-[7.2em] leading-[1em]">Get schooled</h1>
        <div className="flex align-center justify-center gap-[3.5em] mb-[2.5em] tracking-[0.08em] text-[0.95em]">
          <span>SMILES</span>
          <span>GRIN</span>
          <span>LAUGH</span>
        </div>
        <Link to="/" className="btn">
          REGISTER FOR FREE
        </Link>
        <p className="font-[100] text-[1.85em]  mt-[5em] mb-[2.5em]">
          <span className="font-[700] text-purple">Learn</span> from the pros
        </p>
        <div className="flex items-center justify-between max-w-[60em] m-auto">
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
