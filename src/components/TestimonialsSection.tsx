import testimonialImage from "/assets/images/testimonialImage.png";

const TestimonialsSection = () => {
  return (
    <section className="grid place-content-center bg-purple p-[5em] text-left text-[1.1em] tracking-[0.05em] text-white">
      <div className="flex max-w-[50em] flex-wrap items-center justify-center gap-[3em]">
        <div className="w-fit min-w-[8em] overflow-hidden rounded-[50%]">
          <img
            className="w-[11.5em]"
            src={testimonialImage}
            alt="Testimonial image"
          />
        </div>
        <div className="max-w-[35em]">
          <p className="mb-[1.5em] font-[200]">
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
