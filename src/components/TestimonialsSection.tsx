import testimonialImage from "/assets/images/testimonialImage.png";

const TestimonialsSection = () => {
  return (
    <section className="text-[1.1em] text-left bg-purple text-white grid place-content-center p-[5em] tracking-[0.05em]">
      <div className="flex items-center  max-w-[50em]">
        <div className="rounded-[50%] overflow-hidden w-fit">
          <img
            className="w-[11.5em]"
            src={testimonialImage}
            alt="Testimonial image"
          />
        </div>
        <div className="ml-[3em]">
          <p className="font-[200] mb-[1.5em]">
            « Those tutorials are concise and go straight to the point. I can’t
            think of a better place to learn smiling. And it’s so fun!
          </p>
          <p className="mb-[0.2em]">Person Name</p>
          <p className="font-[200] italic">weather presenter</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
