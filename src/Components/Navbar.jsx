import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div
      className="
        fixed top-0 left-0 w-full h-20
        flex items-center px-10
        z-[100] 
        bg-gradient-to-b from-black/70 to-transparent
        backdrop-blur-md
        transition-all duration-500
        animate-fadeInNavbar
      "
    >
      {/* LOGO */}
      <div
        className="
          group cursor-pointer relative select-none
        "
        // onClick={() => navigate("/dashboard")}
      >
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix"
          className="
            w-40 
            drop-shadow-[0_0_15px_rgba(255,0,0,0.7)]
            transition-all duration-300
            group-hover:scale-105
            group-hover:drop-shadow-[0_0_25px_rgba(255,0,0,1)]
          "
        />

        {/* UNDERLINE EFFECT */}
        <div
          className="
            absolute -bottom-1 left-0 w-0 h-[3px]
            bg-red-600 rounded-full
            group-hover:w-full
            transition-all duration-300
          "
        ></div>
      </div>

      {/* NAV LINKS */}

      {/*    

      <div className="ml-10 gap-10 text-lg hidden md:flex items-center">
        {["Home", "Movies", "Series"].map((item, index) => (
          <button
            key={index}
            className="
        relative group font-medium tracking-wide
        text-gray-300 hover:text-white
        transition-all duration-300"
          >
            {item}

          
            <span
              className="
          absolute left-0 -bottom-1 h-[3px] w-0 
          bg-red-600 rounded-full 
          transition-all duration-300
          group-hover:w-full
          shadow-[0_0_10px_rgba(255,0,0,0.7)]
        "
            ></span>

        
            <span
              className="
          absolute left-0 -bottom-1 h-[3px] w-0 
          bg-red-600/40 rounded-full blur
          transition-all duration-500
          group-hover:w-full
        "
            ></span>
          </button>
        ))}
      </div>

      */}

      {/* NAVBAR ANIMATIONS */}
      <style>{`
        @keyframes fadeInNavbar {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInNavbar {
          animation: fadeInNavbar 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
