
const Navbar = () => {
  return (
    <div className=" w-full backdrop-blur border-b border-b-white/15 text-white flex items-center justify-between px-6 h-10.5 fixed shadow-2xl mt-6 bg-transparent gap-1.5 ">
        
        <div className="text-center ">
            <h1 className="poppins-semibold  text-[0.9rem] sm:text-2xl">Gym<span className="text-[#D90A14]">Team</span></h1>
            <p className="poppins text-[0.45rem] sm:text-[0.75rem]">Transform Your Body</p>
        </div>

        <div className="relative w-1/2">
            <img src="../src/assets/svg/search.svg" alt="Search"
            className="absolute left-3 top-1/2  -translate-y-1/2"
             />
                <input
                 type="text"
                 placeholder="Search"
                 className="text-white poppins outline-none placeholder:text-white text-[12px] sm:text-[16px] bg-[#262626] w-full h-9.5 sm:h-11.5 rounded-xl pl-11
                 "
                 />
        </div>
        <div className="flex items-center justify-center">
            <img src="../src/assets/svg/hamburger.svg" alt="Search"
            className="sm:h-5.5"
             />
        </div>
    </div>
  )
}

export default Navbar