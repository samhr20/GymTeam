const HeroSection = () => {
  return (
    <section className="pt-35.5  px-6  overflow-x-hidden text-white poppins flex flex-col items-center justify-center gap-8">
      <div className="flex items-center flex-col-reverse justify-between gap-1 min-h-58.5">

        <div className="flex items-center justify-center flex-col ">
          <h3 className="text-[1.9rem] sm:text-[2.2rem] poppins-semibold">Achive Your</h3>
          <h3 className="poppins-extrabold text-[2.59rem]  sm:text-[2.89rem] bg-linear-to-r from-[#D20C13] to-[#CC4E17] bg-clip-text text-transparent">
            Fitness Goals
          </h3>
          <h3 className="text-[1.9rem] sm:text-[2.2rem] text  poppins-semibold">With GymTeam</h3>
        </div>

        <img
          src="/heroimage.png "
          className="h-[280px] w-[280px]"
          alt="heroimage" />
      </div>
      
      <div className="flex items-center justify-between">
        <p className="text-[14px] sm:text-[0.94rem] text-center">
          "Join the GymTeam community and transform your fitness journey. Our expert coaches and personalized programs are designed to help you achieve your goals and exceed your expectations. Ready to make a change?"
        </p>
      </div>
      <div className="flex items-center justify-center gap-3 w-full">
        <button className="h-13 px-4 py-1.5 bg-[#D90A14] rounded-xl text-[0.8rem] sm:text-[1.1rem] w-full">Start Your Journey</button>
        <button className="h-13 px-4 py-1.5 text-[#CD4E17] border border-[#CD4E17] bg-transparent rounded-xl text-[0.8rem] sm:text-[1.1rem] w-full">Explore Programs</button>

      </div>
    </section>
  );
};

export default HeroSection;
