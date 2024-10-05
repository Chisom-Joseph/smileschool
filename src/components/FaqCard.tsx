type props = {
  title: string;
  description: string;
};

const FaqCard = (props: props) => {
  return (
    <div className="text-left text-[0.9em] max-w-[22.5em]">
      <h5 className="font-bold mb-[2em]">{props.title}</h5>
      <p className="text-blue-opac text-[0.9em] leading-[1.9em]">
        {props.description}
      </p>
    </div>
  );
};

export default FaqCard;
