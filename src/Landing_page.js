const Landing_page = () => {
  return (
    <div className="bg-background_2 px-3 h-screen">
      <div className="relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-black"></div>
      </div>
      <div className="header h-10 text-[#A5AAB9] flex justify-center">
        <div className="flex pt-1">
          <a href="#top">Home</a>
          <a href="https://www.google.com" className="pl-5">
            Our Products
          </a>
          <a href="www.google.com" className="px-5">
            How it works
          </a>
          <a href="www.google.com">Contact us</a>
        </div>
      </div>

      <div className="Main_Section grid grid-cols-2">
        <div className="Left_Part">
          <div className="pt-[200px] text-[#E2E6FA] text-8xl">
            Build By Block
          </div>
          <div className="text-3xl text-[#E4EFFC]">
            BlockChain Web-app For Real Estate
          </div>
          <div className="text-lg text-[#A5AAB9]">
            It was always the Monday mornings. It never seemed to happen on
            Tuesday morning, Wednesday morning, or any other morning during the
            week.
          </div>
          <div className="button text-white">
            <button className="border-2 border-txt_1 rounded-xl pt-1 p-2 text-3xl">
              Sign Up
            </button>
            <button className="border-2 border-txt_1 mx-1 rounded-xl pt-1 p-2 text-3xl">
              Sign In
            </button>
            <button className="border-2 border-txt_1 rounded-xl pt-1 p-2 text-3xl">
              Vision
            </button>
          </div>
        </div>
        <div className="Right_Part">tdsasdaasdaja</div>
      </div>
      <div className="kuch bhi">
        <div className="ml-[10%] w-[80%] grid grid-cols-4 h-auto text-blue bg-white/[2%] text-[#E2E6FA] mt-20 rounded-xl">
          <div>
            <img src="blockchain-icon.svg" className="w-12 h-12"></img>
            <p className="text-[10px]">
              First BLOCKCHAIN WEBSITE FOR REALSTATE
            </p>
          </div>
          <div>DECENTRALIZED NETWORK</div>
          <div>24/7 AVAILIBILITY</div>
          <div>BLOGGING FOR LATEST NEWS AND</div>
        </div>
      </div>
    </div>
  );
};

export default Landing_page;
