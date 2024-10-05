import TutorialCard from "./TutorialCard";

import tutorialImage1 from "/assets/images/tutorialImage1.png";
import tutorialImage2 from "/assets/images/tutorialImage2.png";
import tutorialImage3 from "/assets/images/tutorialImage3.png";
import tutorialImage4 from "/assets/images/tutorialImage4.png";
import tutorialProfileImage from "/assets/images/tutorialProfileImage.png";

const TutorialsSection = () => {
  const owner = {
    profilePhoto: tutorialProfileImage,
    fullName: "Phillip Massey",
  };

  return (
    <section className="p-[5em] m-auto max-w-[80em]">
      <p className="font-[100] text-[1.85em] mb-[2.5em]">
        Most
        <span className="font-[700] text-purple"> popular</span> tutorials
      </p>
      <div className="flex flex-wrap gap-[2em] items-center justify-center">
        <TutorialCard
          videoCoverPhoto={tutorialImage1}
          title="Diagonal Smile"
          description="Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod."
          owner={owner}
          starCount={4}
          uploadTime="8 min"
        />
        <TutorialCard
          videoCoverPhoto={tutorialImage2}
          title="Sad Smile"
          description="Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod."
          owner={owner}
          starCount={3}
          uploadTime="8 min"
        />
        <TutorialCard
          videoCoverPhoto={tutorialImage3}
          title="Natural Smile"
          description="Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod."
          owner={owner}
          starCount={4}
          uploadTime="8 min"
        />
        <TutorialCard
          videoCoverPhoto={tutorialImage4}
          title="Happy Smile"
          description="Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod."
          owner={owner}
          starCount={2}
          uploadTime="8 min"
        />
      </div>
    </section>
  );
};

export default TutorialsSection;
