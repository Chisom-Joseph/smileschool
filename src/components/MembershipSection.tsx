import { Link } from "react-router-dom";

import MembershipCard from "./MembershipCard";

import logoIconPurple from "/assets/images/logoIconPurple.png";

const MembershipSection = () => {
  return (
    <section className="bg-blue text-white p-[2em] pt-[0]">
      <div className="p-[5em] m-auto max-w-[80em]">
        <p className="font-[100] text-[1.85em] mb-[2.5em]">
          <span className="font-[700] text-purple"> Free</span> membership
        </p>
        <div className="flex flex-wrap gap-[5em] items-center justify-center mb-[7em]">
          <MembershipCard
            icon={logoIconPurple}
            title="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <MembershipCard
            icon={logoIconPurple}
            title="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <MembershipCard
            icon={logoIconPurple}
            title="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <MembershipCard
            icon={logoIconPurple}
            title="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
        <Link className="btn" to="/register">
          REGISTER FOR FREE
        </Link>
      </div>
    </section>
  );
};

export default MembershipSection;
