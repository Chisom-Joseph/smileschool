import playIcon from "/assets/icons/triangle.svg";
import starGrey from "/assets/icons/starGrey.svg";
import starPurple from "/assets/icons/starPurple.svg";

type props = {
  videoCoverPhoto: string;
  title: string;
  description: string;
  owner: {
    profilePhoto: string;
    fullName: string;
  };
  starCount: number;
  uploadTime: string;
};

const TutorialCard = (props: props) => {
  const totalStars = 5;
  return (
    <div className="text-left rounded-[0.4em] overflow-hidden w-[16em]">
      <div>
        <div className="w-fit relative">
          <img src={props.videoCoverPhoto} alt={props.title} />
          <div className="bg-[#ffffffbd] w-[3em] h-[3em] rounded-[50%] cursor-pointer grid place-content-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <img className="ml-[0.3em]" src={playIcon} alt="" />
          </div>
        </div>
        <div className="p-[0.8em]">
          <h4 className="font-bold mb-[0.45em]">{props.title}</h4>
          <p className="text-blue-opac text-[0.9em] mb-[1em]">
            {props.description}
          </p>
          <div className="flex items-center gap-[0.9em] mb-[0.6em]">
            <div className="rounded-[50%] overflow-hidden">
              <img
                className="w-[1.9em]"
                src={props.owner.profilePhoto}
                alt=""
              />
            </div>
            <p className="text-purple text-[0.9em]">{props.owner.fullName}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-[0.5em] w-[1em]">
              {Array.from({ length: props.starCount }).map(() => (
                <img src={starPurple} alt="" />
              ))}
              {Array.from({ length: totalStars - props.starCount }).map(() => (
                <img src={starGrey} alt="" />
              ))}
            </div>
            <p className="text-purple text-[0.9em]">{props.uploadTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialCard;
