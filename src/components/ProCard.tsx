type prop = {
  image: string;
  name: string;
  description: string;
};

const ProCard = (props: prop) => {
  return (
    <div className="text-center flex items-center justify-center flex-col w-[9em] tracking-[0.04em]">
      <div className="rounded-[50%] overflow-hidden mb-[1em]">
        <img className="w-[8.4em]" src={props.image} alt="" />
      </div>
      <p className="font-[700] mb-[0.2em]">{props.name}</p>
      <p className="font-[200] italic text-[0.9em]">{props.description}</p>
    </div>
  );
};

export default ProCard;
