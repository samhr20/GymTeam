const Servces = () => {
    return (
        <section className="p-6 py-9 text-white poppins ">
            <div className=" flex items-center justify-center flex-col gap-4">
                <p className="poppins-semibold text-[1.25rem]">Our <span className="text-[#D90A14]">Services</span></p>
                <p className="text-[0.75rem] text-center text-gray-300">At This Part You Can Easily access all of our servises. take a look at them and chose wich ever you want.</p>

                <div className="w-full flex items-center justify-center gap-4 flex-wrap">

                    <div className="w-[320px] sm:w-100 relative overflow-hidden h-87.5 bg-black rounded-xl">

                        <img src="/cycleman.png"
                            className="scale-x-[-1] scale-105  absolute left-[37%] sm:left-[44%] z-20  "
                            height={320}
                             width={320}
                            alt="cycleMan" />

                            <div className="h-125 w-125 bg-[#77060B] rounded-full blur-[80px] absolute
                             -left-45 top-15 z-10">
                            </div>

                           <div className="w-full relative z-30 py-8 px-4">

                            <h4 className="text-[#ff0713] poppins-extrabold text-[1.7rem]">Losing Weight</h4>
                            <p className="text-xs">Click to join Our Losing Wheigt Plans</p>
                            <p className="text-[11px] w-30 sm:w-42 mt-8">Achieve sustainable weight loss with our customized programs, designed to help you burn fat and build a healthier, leaner body. Start your journey to a fitter you today</p>
                           </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Servces