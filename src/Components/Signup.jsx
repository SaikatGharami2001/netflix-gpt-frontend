import { useRef, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { ValidateSignup } from "../utils/ValidateSignup";

const Signup = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorHiding, setErrorHiding] = useState(false);

  // INPUT REFS
  const firstName = useRef(null);
  const lastName = useRef(null);
  const age = useRef(null);
  const gender = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  // 🔥 Show Slide-In + Fade-Out Error
  const showError = (msg) => {
    setErrorMessage(msg);
    setErrorHiding(false);

    setTimeout(() => setErrorHiding(true), 2300);
    setTimeout(() => {
      setErrorMessage(null);
      setErrorHiding(false);
    }, 2700);
  };

  const handleSignupClick = () => {
    const error = ValidateSignup(
      firstName.current.value,
      lastName.current.value,
      age.current.value,
      gender.current.value,
      email.current.value,
      password.current.value
    );

    if (error) {
      showError(error);
      return;
    }

    console.log("Signup successful");
  };

  return (
    <div className="relative h-screen w-full overflow-hidden text-white">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4ffe3d37-1fc1-4d93-b61a-1fa58c11ccff/web/IN-en-20251124-TRIFECTA-perspective_9f00d07d-f08e-494f-8907-92371138c534_small.jpg"
          className="h-full w-full object-cover scale-110 animate-bgZoom"
          alt=""
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
        <div className="absolute inset-0 bg-red-500/10 mix-blend-screen"></div>
      </div>

      {/* NAVBAR */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* CENTER CARD */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div
          className="relative w-[450px] max-w-full
                     bg-white/10 backdrop-blur-2xl
                     border border-white/20 rounded-2xl
                     shadow-[0_0_50px_rgba(255,0,0,0.3)]
                     p-10 transform-gpu transition-all duration-300
                     hover:scale-[1.03] hover:shadow-[0_0_65px_rgba(255,0,0,0.45)]
                     animate-float"
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-lightSweep"></div>
          </div>

          <h1 className="text-4xl font-extrabold mb-8 tracking-wide drop-shadow-xl text-center">
            Create Account
          </h1>

          {/* FORM */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <input
              ref={firstName}
              type="text"
              placeholder="First Name"
              className="w-full p-4 bg-white/20 rounded-lg 
                         placeholder-gray-300 outline-none
                         focus:ring-2 focus:ring-red-600 hover:bg-white/30"
            />

            <input
              ref={lastName}
              type="text"
              placeholder="Last Name"
              className="w-full p-4 bg-white/20 rounded-lg 
                         placeholder-gray-300 outline-none
                         focus:ring-2 focus:ring-red-600 hover:bg-white/30"
            />

            <input
              min={18}
              max={90}
              ref={age}
              type="number"
              placeholder="Age"
              className="w-full p-4 bg-white/20 rounded-lg 
                         placeholder-gray-300 outline-none
                         focus:ring-2 focus:ring-red-600 hover:bg-white/30"
            />

            <input
              ref={gender}
              type="text"
              placeholder="Gender"
              className="w-full p-4 bg-white/20 rounded-lg 
                         placeholder-gray-300 outline-none
                         focus:ring-2 focus:ring-red-600 hover:bg-white/30"
            />

            <input
              ref={email}
              type="email"
              placeholder="Email"
              className="w-full p-4 bg-white/20 rounded-lg 
                         placeholder-gray-300 outline-none
                         focus:ring-2 focus:ring-red-600 hover:bg-white/30"
            />

            {/* PASSWORD FIELD */}
            <div className="relative">
              <input
                ref={password}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-4 bg-white/20 rounded-lg 
                           placeholder-gray-300 outline-none
                           focus:ring-2 focus:ring-red-600 hover:bg-white/30 pr-14"
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 
                           cursor-pointer text-sm text-gray-200 
                           hover:text-white transition"
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>

            {/* ERROR MESSAGE */}
            {errorMessage && (
              <div
                className={`
                  bg-red-600/40 border border-red-500/60 
                  text-white text-sm font-semibold p-3 rounded-lg
                  backdrop-blur-md shadow-lg animate-errorSlide
                  transition-all duration-500
                  ${errorHiding ? "error-fade-out" : ""}
                `}
              >
                {errorMessage}
              </div>
            )}

            <button
              onClick={handleSignupClick}
              className="w-full py-3 text-lg font-semibold rounded-lg 
                         bg-gradient-to-r from-red-600 to-red-700
                         hover:from-red-700 hover:to-red-800
                         shadow-[0_8px_30px_rgba(255,0,0,0.5)]
                         hover:shadow-[0_8px_45px_rgba(255,0,0,0.7)]
                         transition-all"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-gray-300 text-sm text-center">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/")}
              className="text-white hover:underline cursor-pointer"
            >
              Sign In
            </span>
          </p>
        </div>
      </div>

      {/* PARTICLES */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500/60 rounded-full animate-particleMove"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes bgZoom {
          0% { transform: scale(1.15); }
          100% { transform: scale(1.25); }
        }
        .animate-bgZoom { animation: bgZoom 30s ease-in-out infinite alternate; }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }

        @keyframes lightSweep {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-lightSweep { animation: lightSweep 4s infinite linear; }

        @keyframes errorSlide {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-errorSlide { animation: errorSlide 0.4s ease-out; }

        @keyframes errorFadeOut {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }
        .error-fade-out { animation: errorFadeOut 0.4s ease-out forwards; }

        @keyframes particleMove {
          0% { transform: translateY(0); opacity: 0.8; }
          50% { transform: translateY(-30px); opacity: 1; }
          100% { transform: translateY(0); opacity: 0.8; }
        }
        .animate-particleMove { animation: particleMove infinite ease-in-out; }
      `}</style>
    </div>
  );
};

export default Signup;
