type props = {
  icon: string;
  title: string;
  description: string;
};

const MembershipCard = (props: props) => {
  return (
    <div className="text-[1em] flex flex-col items-center justify-center w-[12em]">
      <img className="w-[3em] mb-[1em]" src={props.icon} />
      <h4 className="mb-[1em]">{props.title}</h4>
      <p className="font-[100]">{props.description}</p>
    </div>
  );
};

export default MembershipCard;
