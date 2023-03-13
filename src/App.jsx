import { FaTwitterSquare } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

function App() {
  return (
    <main className="grid h-screen place-items-center bg-gradient-to-b from-gradientInitial to-gradientFinal ">
      <section className="relative h-[520px] w-[650px] rounded-[10px] bg-white drop-shadow-xl">
        <div className="absolute right-0 -top-[1px] flex h-8 w-8 items-center justify-center rounded-none rounded-tr-xl bg-backgroundAndButton hover:cursor-pointer">
          <AiOutlineClose
            size={22}
            className=" rounded-none rounded-tr-xl bg-backgroundAndButton text-red-400/60"
          />
        </div>
        <div className="mx-auto mt-8 max-w-[450px]">
          <h1 className="text-4xl leading-10 text-black">
            Take your <span className="font-bold text-pinkDetails">gaming</span>
            <br /> experience to the next level!
          </h1>
          <p className="mt-6 text-sm text-subtitleColor">
            We're giving away a top-of-the-line keyboard that boasts responsive
            tactile switches and{" "}
            <span className="bg-gradient-to-r from-orange-500 via-red-700 to-pinkDetails bg-clip-text font-bold text-transparent ">
              customizable RGB lighting
            </span>{" "}
            to one lucky winner
          </p>
        </div>
        <div className=" my-4 h-[190px] w-full bg-backgroundAndButton">
          <div className="relative mx-auto h-full max-w-[450px]">
            <img
              src="/src/assets/keyboard.png"
              alt="keyboard in giveway"
              className="pointer-events-none absolute -top-12 h-auto w-full"
            />
          </div>
        </div>
        <div className="relative z-30 mx-auto mt-16 h-10 w-full max-w-[450px]">
          <input
            className="h-full w-4/6 rounded-l-xl rounded-bl-xl border border-borderColor bg-white text-center"
            placeholder="Enter your email here"
          ></input>

          <button className=" h-full w-2/6 rounded-r-xl rounded-br-xl bg-black text-white">
            Enter Giveaway
          </button>
          <img
            src="/src/assets/Gift--Icon.svg"
            alt=""
            className="pointer-events-none absolute right-0 -top-5 h-7 w-7 animate-gift-shake"
          />
          <p className="text-xs text-infoColor ">
            Just enter your email and you'll be entered for a chance to win.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
